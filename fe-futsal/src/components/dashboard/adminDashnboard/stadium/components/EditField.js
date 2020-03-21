import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Service from '../service/StadiumFieldService';

class EditField extends Component {
    constructor(props) {
        super(props);
    }

    handleInputFileCode = (event) => {
        let data = event.target.value;
        this.props.dispatch({type: 'HANDLE_INPUT_FIELD_CODE', fields: data})
    }

    handleInputPricePerHour = (event) => {
        let data = event.target.value;
        this.props.dispatch({type: 'HANDLE_INPUT_PRICE_PER_HOUR', fields: data})
    }

    handleInputStatus = (event) => {
        let data = event.target.value;
        this.props.dispatch({type: 'HANDLE_INPUT_STATUS_FIELD', fields: data})
    }

    handleInputFieldImage = (event) => {
        let images = event.target.files[0]
        console.log(images)
        this.setState({file: images})
    }

    handleSubmit = async (event) => {
        await event.preventDefault();
        await Service.updateField(this.props.addField)

    }

    render() {
        return (
            <div>
                <div className="modal fade" id="editField" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark" id="exampleModalLabel">Edit Field</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label className="text-dark">Field Code</label>
                                        <input type="text" className="form-control border-dark hover"
                                               name="fieldCode" value={this.props.addField.fieldCode}
                                               onChange={this.handleInputFileCode}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark">Price Per Hour</label>
                                        <input type="text" className="form-control border-dark"
                                               name="pricePerHour" value={this.props.addField.pricePerHour}
                                               onChange={this.handleInputPricePerHour}/>
                                    </div>
                                    <div className="form-group">
                                        <select name="cars">
                                            <option value="ACTIVE">ACTIVE</option>
                                            <option value="NO_ACTIVE">DEACTIVE</option>
                                        </select>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"
                                                onClick={this.handleSubmit}>Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default withRouter(connect(mapStateToProps)(EditField));
