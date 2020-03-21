import React, {Component} from 'react';
import './../assets/style/table.css'
import {connect} from "react-redux";
import {FETCH_PAYMENTS_SUCCESS} from "../reducer/action/BookingHistoryAction";
import {transactionList} from "../service/TransactionHistoryService";
class TransactionHistory extends Component {
    render() {
        return (
                <div className="card w-100">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="py-3 text-center font-bold font-up blue-text">Transaction History</h2>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover mb-0 w-100">
                                <thead>
                                <tr>
                                    <th scope="row">No. </th>
                                    <th className="th-lg ck">No Transaction</th>
                                    <th className="th-lg">No Booking</th>
                                    <th className="th-lg">Name</th>
                                    <th className="th-lg">No Phone</th>
                                    <th className="th-lg">Field Code</th>
                                    <th className="th-lg">Booking Date</th>
                                    <th className="th-lg">Payment Date</th>
                                    <th className="th-lg">Status Payment</th>
                                    <th className="th-lg">Option</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.payments.map((payment, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index+=1}</th>
                                            <td>{payment.idPayment}</td>
                                            <td>{payment.booking.idBooking}</td>
                                            <td>{payment.booking.users.name}</td>
                                            <td>{payment.booking.users.phoneNumber}</td>
                                            <td>{payment.booking.field.fieldCode}</td>
                                            <td>{payment.booking.bookingDate}</td>
                                            <td>{payment.payDate}</td>
                                            <td>{payment.statusPayment}</td>
                                            <td><a href="#">Print</a></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                            <nav className="my-4 pt-2">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled clearfix d-none d-md-block"><a
                                        className="page-link">First</a></li>
                                    <li className="page-item disabled">
                                        <a className="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        );
    }

    async componentDidMount() {
        const transactionHistory = await transactionList()
        this.props.dispatch({...FETCH_PAYMENTS_SUCCESS, payload: transactionHistory})
    }
}

const handleAll = (state) => {
    return {...state}
}
export default connect(handleAll)(TransactionHistory);
