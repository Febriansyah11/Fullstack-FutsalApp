import React, { Component } from 'react';
import './StadiumContainer.css';
import Header from '../../dashboardUser/subComponents/Header';
import Carousel from '../subComponents/carousel/Carousel';
import StadiumCard from "./components/StadiumCard";
import {Switch, Route} from 'react-router-dom'
import StadiumDetail from "./components/StadiumDetail";

export default class StadiumContainer extends Component {
  render() {
    return (
        <div style={{display :"flex", flexDirection:"column"}}>
            <div className="dashboard-user">
                <Header />
                <Carousel />
            </div>
            <div>
                <Switch>
                        <Route exact path="/user" component={StadiumCard}/>
                    <Route path='/user/:id' component={StadiumDetail}/>
                </Switch>
            </div>
        </div>
    );
  }
}

