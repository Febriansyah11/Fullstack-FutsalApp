import React, {Component} from 'react'
import * as Service from '../service/StadiumFieldService';
import {connect} from 'react-redux';
import Swal from "sweetalert2";
import {Button} from '@material-ui/core';
import AddStadium from "./AddStadium";
import AuthService from "../../../../services/AuthService";
import AddField from "./AddField";
import EditField from "./EditField";

class StadiumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idStadium: ""
        }
        this.stadiumDetail = this.stadiumDetail.bind(this)
        this.deleteField = this.deleteField.bind(this)
    }

    stadiumDetail() {
        const {dispatch} = this.props;
        let id = AuthService.getUserId();
        console.log("admin: ini cdn", id)
        Service.getIdUsers(id)
            .then(stadiums => {
                dispatch({type: 'FETCH_STADIUM_DONE', loading: false, stadiums: stadiums});

            })
            .catch((err) => {
                dispatch({type: 'FETCH_STADIUM_DONE', loading: false, stadiums: []})
            })
    }

    componentDidMount() {
        this.stadiumDetail();
    }

    deleteField = async (id) => {
        this.setState({idStadium: id})
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Service.deleteField(this.state.idStadium).then(res => {
                    this.stadiumDetail();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                })

            }

        })
    }

    returnStadium(stadiums) {
        if (stadiums.stadiums !== undefined) {
            return (
                <>
                    {stadiums.stadiums.map((stadium, index) => {
                        return (
                            <div className="card container col-12 w-100 mb-3" >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="py-3 text-center font-bold font-up blue-text">{stadium.stadiumName}</h2>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <Button color="primary" type="button"
                                                onClick={e => this.props.dispatch({
                                                    type: 'HANDLE_INPUT_ID_STADIUM_TRANSIENT',
                                                    fields: stadium.idStadium
                                                })} className="btn btn-primary" data-toggle="modal"
                                                data-target="#addField">
                                            Add field
                                        </Button>
                                        <AddField reload={this.stadiumDetail}/>
                                        <table className="table table-hover mb-0 w-100 text-dark">
                                            <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Field Code</th>
                                                <th scope="col">Price</th>
                                                <th scope="col-6">Status</th>
                                                <th scope="col-6">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody style={{marginTop: 10}}>
                                            {stadium.fields.map((field, index2) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{index2 + 1}</th>
                                                        <td>{field.fieldCode}</td>
                                                        <td>{field.pricePerHour}</td>
                                                        <td>{field.statusField}</td>
                                                        <td>
                                                            <a className="link btn-link text-danger"
                                                               onClick={e => this.deleteField(field.idField)}><i
                                                                className="far fa-trash-alt"> Delete</i></a> |
                                                            <a className="link btn-link text-warning"
                                                               data-toggle="modal"
                                                               onClick={e => this.props.dispatch({
                                                                   type: 'HANDLE_INPUT_ID_STADIUM_TRANSIENT',
                                                                   fields: stadium.idStadium
                                                               })}
                                                               data-target="#editField"><i className="fas fa-edit"
                                                                                           onClick={e => this.props.dispatch({
                                                                                               type: 'HANDLE_INPUT_FIELD_ID',
                                                                                               fields: field.idField
                                                                                           })}> Edit</i></a>
                                                            <EditField/>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan="3">Address : {stadium.address}</td>
                                                <td>Open Time : {stadium.openingHours}</td>
                                                <td>Closing Time : {stadium.closingHours}</td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </>
            )
        } else {
            return <h5>Please check your connection!</h5>
        }
    }

    render() {
        const {stadiums, loading} = this.props;
        console.log("admin: ini render stadiums", stadiums);
        let listStadium = (<div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
        </div>)
        if (!loading) {
            listStadium = this.returnStadium(stadiums);
        }
        return (
            <div>
                <AddStadium reload={this.stadiumDetail}/>
                {listStadium}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps)(StadiumCard);
