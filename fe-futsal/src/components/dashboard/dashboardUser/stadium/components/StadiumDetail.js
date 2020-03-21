import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Service from '../service/service';
import AuthService from "../../../../services/AuthService";
import {Link} from "react-router-dom";
import '../assets/stadium.css';
import Trolly from '@material-ui/icons/AddShoppingCart';
import MUIDataTable from "mui-datatables";
import '../StadiumContainer.css';

const columns = ["Field Code", "Date", "Start Time", "End Time"];
const options = {
    filterType: 'checkbox',
    responsive: 'scroll',
    selectableRows: true,
    selectableRowsOnClick: true
};

class StadiumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingList: [],
            data: [],
        };
    }

    stadiumDetail() {
        const {dispatch} = this.props;
        let id = this.props.match.params.id;
        console.log(id, "cdm")
        Service.getId(id)
            .then((stadium) => {
                console.log(stadium, "user : ini cdn detail stadium")
                dispatch({type: 'FETCH_STADIUM_DETAIL', loading: false, stadium});

            }).catch((err) => {
            dispatch({type: 'FETCH_STADIUM_DETAIL', loading: false, stadium: []})
        })
    }

    bookingDetail() {
        let id = this.props.match.params.id;
        Service.getId(id).then((response) => {
            let bookingList = response;
            const data = [];
            bookingList.fields.map((field, index) => {
                if (field.statusBooking !== "BOOKED") {
                    return (
                        field.bookings.map(x => data.push({
                            "Field Code": field.fieldCode,
                            "Date": x.bookingDate,
                            "Start Time": x.timePlaceStart,
                            "End Time": x.timePlaceEnd
                        }))
                    )
                }
            })
            this.setState({data})
        })
    }

    componentDidMount() {
        this.stadiumDetail();
        this.bookingDetail();
    }

    renderField(stadium, detail) {
        if (stadium.fields !== undefined) {
            return (
                <div>
                    <Link to="/chat"><i className="fab fa-facebook-messenger fixed-bottom mb-3 mr-3"
                                        style={{
                                            fontSize: '3.5em',
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}> </i></Link>
                    <div className="">
                        {stadium.fields.map((field, index2) => {
                            return (
                                <div className="">
                                    <div className="services-item wow fadeInRight p-0" data-wow-delay="0.3s">
                                        <img className="img-field p-0 hoverable"
                                             src={`http://localhost/futsal-app-image/field-image/${field.idField}`}/>
                                        <div className="services-content p-4">
                                            <div className="" key={index2}>
                                                <h5 className="text-dark">Field&nbsp;: {field.fieldCode}</h5>
                                            </div>
                                            <div className="">
                                                <h5 className="text-dark">Price : Rp. {field.pricePerHour},00</h5>
                                            </div>
                                            <div className="">
                                                <h5 className="text-dark">Acc numb : 024126579869</h5>
                                            </div>
                                            <Link className="trolly w-25 h-25 text-primary"
                                                  onClick={e => this.props.dispatch({
                                                      type: 'HANDLE_BOOKING_ID_USER',
                                                      booking: AuthService.getUserId()
                                                  })} data-toggle="modal" data-target="#booking">
                                                <a className="link text-primary" onClick={e => this.props.dispatch({
                                                    type: 'HANDLE_BOOKING_ID_FIELD',
                                                    booking: field.idField
                                                })}><Trolly/>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/*</div>*/}
                    {/*    Modal    */}
                    <div className="modal fade mt-5" id="booking" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Booking</h5>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        {detail ?
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Field Name</label>
                                                <input type="text" className="form-control border-dark"
                                                       id="exampleFormControlInput1"/>
                                            </div> : null}
                                        <div className="form-group">
                                            <label className="text-dark">Date</label>
                                            <input type="date" value={this.props.bookingDate}
                                                   onChange={this.handleInputDate}
                                                   className="form-control border-dark"
                                                   name="openingHours"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-dark">Start Time</label>
                                            <input type="time" value={this.props.bookingForm.timePlaceStart}
                                                   onChange={this.handleInputStartTime}
                                                   className="form-control border-dark"
                                                   name="openingHours"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-dark">End Time</label>
                                            <input type="time" value={this.props.bookingForm.timePlaceEnd}
                                                   onChange={this.handleInputEndTime}
                                                   className="form-control border-dark"
                                                   name="closingHours"/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>
                                            <button type="button" onClick={this.handleSubmit}
                                                    data-dismiss="modal"
                                                    className="btn btn-primary">Save changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<h5>Please check your connection!</h5>)
        }
    }

    render() {
        const {loading, stadium, detail} = this.props;
        console.log(AuthService.getUserId(), "render auth yang login")
        console.log(stadium, "user : ini detail stadium render")
        let listStadium = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
            </div>)

        if (!loading) {
            listStadium = this.renderField(stadium, detail);
        }
        return (
            <section className="section-padding p-5 bg-gray row">
                <div className="col-8 field-card mt-3">
                    <MUIDataTable
                        title={"Schedule"}
                        data={this.state.data}
                        columns={columns}
                        options={options}
                    />
                </div>
                <div className="col-4">
                    {listStadium}
                </div>
            </section>
        );
    }

    handleSubmit = async () => {
        await Service.post(this.props.bookingForm).then(res => {
            this.bookingDetail();
        })
    }
    handleInputDate = (event) => {
        console.log("onChange", event.target.value)
        let data = event.target.value
        this.props.dispatch({type: 'HANDLE_BOOKING_DATE', booking: data})
    }
    handleInputStartTime = (event) => {
        console.log("onChange", event.target.value)
        let data = event.target.value
        this.props.dispatch({type: 'HANDLE_BOOKING_START', booking: data})
    }
    handleInputEndTime = (event) => {
        console.log("onChange", event.target.value)
        let data = event.target.value
        this.props.dispatch({type: 'HANDLE_BOOKING_END', booking: data})
    }

}


function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(StadiumDetail);
