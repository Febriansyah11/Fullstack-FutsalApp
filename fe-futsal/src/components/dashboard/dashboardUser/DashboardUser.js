import React, { Component } from 'react';
import './DashboardUser.css';
import StadiumContainer from "./stadium/StadiumContainer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import  reducer from "./stadium/reducer/reducer"
export default class DashboardUser extends Component {
    render() {
        return (
           <div>
               <Provider store={createStore(reducer)}>
                   <StadiumContainer/>
               </Provider>
           </div>
        );
    }
}
