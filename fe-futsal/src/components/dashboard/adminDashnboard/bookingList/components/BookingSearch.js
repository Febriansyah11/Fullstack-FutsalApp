import React, {Component} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import * as Service from "../service/BookingListService";
import AuthService from "../../../../services/AuthService";
import {YearSelection} from "@material-ui/pickers/views/Year/YearView";
import MUIDataTable from "mui-datatables";
import {connect} from "react-redux";

class BookingSearch extends Component {
    constructor() {
        super();
        this.state = {
            bookingId : ""
        }
        this.bookingSearch = this.bookingSearch.bind(this);
    }


    bookingSearch() {
        // event.preventDefault();
        const {dispatch, booking} = this.props;
        // let id = booking;
        console.log("user booking transaction ", this.state.bookingId )
        Service.bookingId(this.state.bookingId)
            .then((response) => {
                dispatch({type: 'FETCH_BOOKING_DONE', bookings: response});
            })
            .catch((error) => {
                dispatch({type: 'FETCH_BOOKING_DONE', bookings: []});
            });
    }


    handleChange = (event) => {
        console.log("value form search : ", event.target.value)
        this.setState({[event.target.name]: event.target.value});

        // console.log("value form :", e.target.value)
        // let users = e.target.value;
        // this.props.dispatch({type: 'HANDLE_BOOKONG_ID', users})

    }

    render() {
        const {bookings} = this.props
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="search col-lg-12 col-xs-12 - col-md-12 col-sm-12">
                    <form>
                        <div className="input-group md-form form-sm form-1 pl-0 col-lg-9 col-xs-9 col-md-9 col-sm-9">
                            <div className="input-group-prepend">
                                <span className="input-group-text cyan lighten-2" id="basic-text1"><SearchIcon/></span>
                            </div>
                            <input className="form-control my-0 py-1" value={this.state.bookingId} onChange={this.handleChange}
                                   type="text"
                                   placeholder="Search" name="bookingId"/>

                            <button type="button" onClick={this.bookingSearch}
                                    className="btn btn-primary">Search
                            </button>
                        </div>
                    </form>
                </div>
                {bookings ?
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id Booking</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Total Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{bookings.idBooking}</td>
                                <td>{bookings.statusPayment}</td>
                                <td>{bookings.bookingDate}</td>
                                <td>{bookings.timePlaceStart}</td>
                                <td>{bookings.timePlaceEnd}</td>
                                <td>{bookings.totalPrice}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    : null}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(BookingSearch);
