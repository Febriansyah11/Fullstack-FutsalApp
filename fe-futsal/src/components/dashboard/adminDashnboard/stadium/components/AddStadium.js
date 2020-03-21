import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Service from '../service/StadiumFieldService';
import {withRouter} from 'react-router-dom';


class AddStadium extends Component {
    constructor(props){
        super(props);
        this.state ={
            file: '',
        }}

    handleInputStadiumName = (event) => {
        let data = event.target.value
        this.props.dispatch({type : 'HANDLE_STADIUM_NAME', stadiums : data})
    }
    handleInputStadiumAddress = (event) => {
        let data = event.target.value
        this.props.dispatch({type : 'HANDLE_STADIUM_ADDRESS', stadiums : data})
    }
    handleInputStadiumOpening = (event) => {
        let data = event.target.value
        this.props.dispatch({type : 'HANDLE_STADIUM_OPENING', stadiums : data})
    }
    handleInputStadiumClosing = (event) => {
        let data = event.target.value
        this.props.dispatch({type : 'HANDLE_STADIUM_CLOSING', stadiums : data})
    }

    handleInputStadiumImage = (event) => {
        let images =  event.target.files[0]
        this.setState({file: images})
    }

    handleSubmitMenu = (e) => {
        e.preventDefault();

        Service.create(this.props.addStadium, this.state.file).then(response => {
            this.props.reload()
        })

    }
    render() {
        return (
           <div>
               <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div className="modal-dialog" role="document">
                       <div className="modal-content">
                           <div className="modal-header">
                               <h5 className="modal-title text-dark" id="exampleModalLabel">Add Stadium</h5>
                               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                               </button>
                           </div>
                           <div className="modal-body">
                               <form enctype="multipart/form-data">
                                   <div className="form-group m-0">
                                       <label className="text-dark">Stadium Name</label>
                                       <input type="text" className="form-control border-dark hover"
                                              name="stadiumName" value={this.props.addStadium.stadiumName} onChange={this.handleInputStadiumName} required="text"/>
                                   </div>
                                   <div className="form-groupm m-0">
                                       <label className="text-dark">Address</label>
                                       <input type="text" className="form-control border-dark"
                                              name="address" value={this.props.addStadium.address} onChange={this.handleInputStadiumAddress}/>
                                   </div>
                                   <div className="form-group m-0">
                                       <label className="text-dark">Opening Time</label>
                                       <input type="time" className="form-control border-dark"
                                              name="openingHours" value={this.props.addStadium.openingHours} onChange={this.handleInputStadiumOpening}/>
                                   </div>
                                   <div className="form-group m-0">
                                       <label className="text-dark">Closing Time</label>
                                       <input type="time" className="form-control border-dark"
                                              name="closingHours" value={this.props.addStadium.closingHours} onChange={this.handleInputStadiumClosing}/>
                                   </div>
                                   <div className="form-group col-6 m-0">
                                       <label className="text-dark">Image</label>
                                       <input type="file" name="file"  onChange={this.handleInputStadiumImage} accept="image/x-png,image/gif,image/jpeg" className="form-control"/>
                                   </div>
                                   <div className="modal-footer">
                                       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                       <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitMenu}>Save</button>
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
export default withRouter(connect(mapStateToProps)(AddStadium));
