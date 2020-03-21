import React, {Component} from 'react'
import * as Service from '../service/service';
import {connect} from 'react-redux';
import Search from "../../search/Search";
import '../assets/stadium.css'
import {Link} from 'react-router-dom'

class StadiumCard extends Component {
    constructor(props) {
        super(props);
    }

    stadiumDetail() {
        const {dispatch, loading} = this.props;
        if (loading) {
            dispatch({type: 'FETCH_STADIUM'});
            Service.list()
                .then(stadiums => {
                    console.log(stadiums);
                    dispatch({type: 'FETCH_STADIUM_DONE', loading: false, stadiums: stadiums});
                })
                .catch((error) => {
                    dispatch({type: 'FETCH_STADIUM_DONE', loading: false, stadiums: []});
                })
        }
    }

    componentDidMount() {
        this.stadiumDetail();
    }

    returnStadium(stadiums) {
        return (
            <div className="row">
                {stadiums.map((stadium, index) => {
                    console.log(stadium.idStadium," id stadium")
                    return (
                        <div className="col-md-5 col-lg-4 col-xs-8 stadium-card">
                            <Link to={`/user/${stadium.idStadium}`}>
                                <div className="services-item fadeInRight p-0" data-wow-delay="0.3s">
                                    <img className="img-stadium w-full p-0 hoverable" style={{height : 300}} src={`http://localhost/futsal-app-image/stadium-image/${stadium.idStadium}`}/>
                                    <div className="services-content p-3">
                                        <div className="">
                                            <h4 className="">{stadium.stadiumName}</h4>
                                        </div>
                                        <div className="">
                                            <p className="">Address &nbsp;: &nbsp; {stadium.address}</p>
                                        </div>
                                        <div className="">
                                            <p className="">Open&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; {stadium.openingHours}</p>
                                        </div>
                                        <div className="">
                                            <p className="">Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; {stadium.closingHours}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        )
    }

    handleInputChange = (event) => {
        const {stadiums, dispatch} = this.props;
            let filter = stadiums.filter((stadium) => {
                return stadium.stadiumName.toLowerCase().includes(event.target.value);
        })
        if(event.target.value === undefined){
            this.stadiumDetail();
        }
        dispatch({type: 'FETCH_STADIUM_DONE', loading: false, stadiums: filter});

    };

    render() {
        const {stadiums, loading} = this.props;
        console.log("sekarang", stadiums);
        let listStadium = (<div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
        </div>)
        if (!loading) {
            listStadium = this.returnStadium(stadiums);
        }
        return (
            <div>
                <section className="section-padding bg-gray">
                    <div className="container">
                        <div className="section-header text-center">
                            <Search handleChange={this.handleInputChange}/>
                        </div>
                        {listStadium}
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps)(StadiumCard);
