import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import TableStadium from "../components/TableStadium";

class OwnerContainer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/stadium" component={TableStadium}/>
                </Switch>
            </div>
        );
    }
}

export default OwnerContainer;
