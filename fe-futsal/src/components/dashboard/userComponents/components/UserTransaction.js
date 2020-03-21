import React, {Component} from 'react';
import * as Service from "../service/UserService";
import AuthService from "../../../services/AuthService";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const QRCode = require('qrcode.react');

class UserTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrcode: ""
        }
    }

    UserFetch() {
        const {dispatch, loading} = this.props;
        if (loading) {
            dispatch({type: 'FETCH_USERS'});
            let id = AuthService.getUserId();
            console.log("Ini id user transaction ", id)
            Service.getUserId(id)
                .then((response) => {
                    dispatch({type: 'FETCH_USERS_DONE', loading: false, users: response});
                })
                .catch((error) => {
                    dispatch({type: 'FETCH_USERS_DONE', loading: false, users: []});
                });
        }
    }

    componentDidMount() {
        this.UserFetch()
    }


    renderUserRows(users) {
        return users.bookings.map((booking, index) => {
            // if (booking.statusPayment === "UNPAID" ) {
            return (
                <tr>
                    <td scope="row">{index += 1}</td>
                    <td>{booking.idBooking}</td>
                    <td>{users.name}</td>
                    <td>{booking.timePlaceStart}</td>
                    <td>{booking.timePlaceEnd}</td>
                    <td>{booking.bookingDate}</td>
                    <td>Rp. {booking.totalPrice}.00</td>
                    <td>{booking.statusPayment}</td>
                    <td><Link data-toggle="modal" data-target="#qrcode"
                              onClick={e => this.setState({qrcode: booking.idBooking + '          ' + users.name})}><i
                        className="fas fa-qrcode text-dark"></i></Link></td>
                </tr>
            )
            // }
        })

    }


    render() {
        const {users, loading} = this.props
        console.log("ini data users : ", users)
        let rows = (<tr>
            <td colSpan={5}>LOADING...</td>
        </tr>);

        if (!loading) {
            rows = this.renderUserRows(users);
        }
        return (
            <div>
                <div className="card w-auto m-5">
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="py-1 text-center font-bold font-up blue-text">Booking List</h2>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover mb-0 w-100">
                                <thead>
                                <tr>
                                    <th scope="row">No.</th>
                                    <th>Booking Number</th>
                                    <th>Name</th>
                                    <th>Time Start</th>
                                    <th>Time End</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="qrcode" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">

                    <div class="modal-dialog modal-sm" role="document">


                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-center">
                                <QRCode value={this.state.qrcode}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(UserTransaction);