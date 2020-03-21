import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Service from '../service/StadiumFieldService';

class AddField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        }
    }

    handleInputFileCode = (event) => {
        let data = event.target.value;
        this.props.dispatch({type: 'HANDLE_INPUT_FIELD_CODE', fields: data})
    }

    handleInputPricePerHour = (event) => {
        let data = event.target.value;
        this.props.dispatch({type: 'HANDLE_INPUT_PRICE_PER_HOUR', fields: data})
    }

    handleInputFieldImage = (event) => {
        let images = event.target.files[0]
        console.log(images)
        this.setState({file: images})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Service.createfield(this.props.addField, this.state.file).then(res => {
                this.props.reload();
        })

    }

    render() {
        return (
            <div>
                <div className="modal fade" id="addField" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark" id="exampleModalLabel">Add Field</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label className="text-dark">Field Code</label>
                                        <input type="text" className="form-control border-dark hover"
                                               name="stadiumName" value={this.props.addField.fieldCode}
                                               onChange={this.handleInputFileCode}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark">Price Per Hour</label>
                                        <input type="text" className="form-control border-dark"
                                               name="address" value={this.props.addField.pricePerHour}
                                               onChange={this.handleInputPricePerHour}/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="text-dark">Image</label>
                                        <input type="file" name="file" onChange={this.handleInputFieldImage}
                                               accept=".jpg, .png, .jpeg" className="form-control"/>
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

export default withRouter(connect(mapStateToProps)(AddField));
