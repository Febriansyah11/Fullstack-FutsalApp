import React, {Component} from 'react';
import {BookingRoute, AdminRoute, HistoryRoute, StadiumRoute, ChatRoute, UserTransactionRoute} from "./CustomRoute";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "../landingPage/Landing";
import DashboardUser from "../dashboard/dashboardUser/DashboardUser";
import UserSignIn from "../dashboard/userComponents/components/UserSignIn";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "../dashboard/userComponents/reducers/CombineReducers";
import UserSignUp from "../dashboard/userComponents/components/UserSignUp";
import UserTransaction from "../dashboard/userComponents/components/UserTransaction"
import UserProfil from "../dashboard/userComponents/components/UserProfil";

class Switcher extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <HistoryRoute path="/history"/>
                    <AdminRoute path="/admin"/>
                    <BookingRoute path="/booking-list"/>
                    <StadiumRoute path="/stadium"/>
                    <ChatRoute path="/chat"/>
                    <UserTransactionRoute path="/transaction" component={UserTransaction}/>

                    <Route exact path="/"><Landing/> </Route>
                    <Route path="/user" component={DashboardUser}/>

                    <Route path="/login"><UserSignIn/></Route>
                    <Provider store={createStore(reducers)}>
                        <Route path="/register"><UserSignUp/></Route>
                    </Provider>

                    <Route path="/user-profil"><UserProfil/></Route>
                </Switch>
            </Router>
        );
    }
}

export default Switcher;