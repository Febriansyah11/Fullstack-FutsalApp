import React, {Component} from 'react';
import {ServiceBookingList} from "../service/BookingListService";
import {fetchBooking} from "../action/BookingAction";
import BookingList from "../components/BookingList";
import {connect} from "react-redux";
import './../assets/style/table.css'
class BookingListContainer extends Component {
    componentDidMount() {
        this.fetchBookingList();
    }

    fetchBookingList = async () => {
        const dataBooking = await ServiceBookingList()
        this.props.dispatch({...fetchBooking, payload : dataBooking})
        console.log(dataBooking, "fetch")
    }

    render() {
        console.log(this.props, "BOoking")
        return (
            <div style={{width: "98%"}}>
                {/*{this.props.bookings.map((element, index ) => {*/}
                {/*    return <h1>{element.idBooking}</h1>*/}
                {/*})}*/}
                {/*<BookingList dataSushi = {this.props}/>*/}
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps)(BookingListContainer);
