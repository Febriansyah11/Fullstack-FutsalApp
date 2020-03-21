import React, {Component} from 'react';
import './../assets/style/table.css'
import {connect} from "react-redux";
import AuthService from "../../../../services/AuthService";
import * as UserService from "../../stadium/service/StadiumFieldService";
import * as Service from "../service/BookingListService";
import Swal from "sweetalert2";
import {Button} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import BeenhereIcon from '@material-ui/icons/Beenhere';

const columns = ["Number Booking", "Field Code", "Date", "Start Time", "End Time", "Status", "Action"];
const options = {
    filterType: 'checkbox',
    responsive: 'scroll',
    selectableRows: true,
    selectableRowsOnClick: true
}

class BookingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            data: [],
            delay: 100,
            result: 'No result'
        };
    }

    stadiumDetail() {
        let id = AuthService.getUserId();
        console.log("Ini id admin cdn di booking list = ", id)
        UserService.getIdUsers(id)
            .then(response => {
                const user = response;
                const data = [];
                user.stadiums.map((stadium, index) => {
                    return (
                        <>{stadium.fields.map((field, index2) => {
                            return (
                                field.bookings.map(x => data.push({
                                    "Number Booking": x.idBooking,
                                    "Field Code": field.fieldCode,
                                    "Date": x.bookingDate,
                                    "Start Time": x.timePlaceStart,
                                    "End Time": x.timePlaceEnd,
                                    "Status": x.statusPayment,
                                    "Action": (
                                        <Button onClick={e => this.handleSubmit(x.idBooking)}><BeenhereIcon/></Button>)
                                }))
                            )
                        })}
                        </>
                    )
                })
                this.setState({data
                });
            })
    }

    componentDidMount() {
        this.stadiumDetail();
    }

    render() {
        console.log(this.state.data, "Inin state")
        return (
            <div>
                <MUIDataTable
                    title={"Booking List"}
                    data={this.state.data}
                    columns={columns}
                    options={options}/>
            </div>
        );
    }

    handleChange = (event) => {
        console.log("ini onchange id booking :", event.target.value)
    }

    handleSubmit = async (e) => {
        console.log(e, "ini data id booking di submit")
        this.props.dispatch({type: 'HANDLE_PAYMENT_ID', payment: e})

        await Swal.fire({
            title: 'You want to aprove this request?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, aprove it!'
        }).then(async (result) => {
            if (result.value) {
                console.log("ini payment user : ", this.props.paymentForm)
                await Service.payment(this.props.paymentForm)
                this.stadiumDetail()
            }
        })
    }

}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps)(BookingList);
