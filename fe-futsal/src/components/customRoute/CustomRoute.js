// public route
import {Route, Switch} from "react-router-dom";
import TopBar from "../dashboard/adminDashnboard/dashboard/components/TopBar";
import Sidebar from "../dashboard/adminDashnboard/dashboard/components/Sidebar";
import React from "react";

import BookingHistory from "../dashboard/adminDashnboard/bookingHistory/components/TransactionHistory";
import BookingList from "../dashboard/adminDashnboard/bookingList/components/BookingList";
import {Provider} from "react-redux";
import OwnerContainer from "../dashboard/adminDashnboard/stadium/container/OwnerContainer";
import {createStore} from "redux";
import StadiumFieldOwnerReducer from "../dashboard/adminDashnboard/stadium/reducer/StadiumFieldReducer";
import bookingListCounter from "../dashboard/adminDashnboard/bookingList/reducer/BookingListReducer";
import HistoryBookingReducer from "../dashboard/adminDashnboard/bookingHistory/reducer/BookingHistoryReducer";
import ChatApp from "../dashboard/chat/ChatApp";
import reducers from '../dashboard/chat/reducers';
import UserTransaction from "../dashboard/userComponents/components/UserTransaction";
import UserReducer from "../dashboard/userComponents/reducers/UserReducer";
import Header from "../dashboard/dashboardUser/subComponents/Header";
import BookingSearch from "../dashboard/adminDashnboard/bookingList/components/BookingSearch";
import Container from '@material-ui/core/Container';

// Route Dashboard Admin
export const HistoryRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div className="container-scroller">
                    <TopBar/>
                    <div className="container-fluid page-body-wrapper">
                        <Sidebar/>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <Provider store={createStore(HistoryBookingReducer)}>
                                        <BookingHistory/>
                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
        />
    )
}

export const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div className="container-scroller">
                    <Provider store={createStore(StadiumFieldOwnerReducer)}>
                        <TopBar/>
                    </Provider>
                    <div className="container-fluid page-body-wrapper">
                        <Sidebar/>
                        <div className="main-panel">
                            <div className="content-wrapper" style={{marginLeft: 20}}>
                                <div className="row">
                                    <Provider store={createStore(bookingListCounter)}>
                                        <BookingList/>
                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
        />
    )
}

export const StadiumRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <Provider store={createStore(StadiumFieldOwnerReducer)}>
                    <div className="container-scroller">
                        <TopBar/>
                        <div className="container-fluid page-body-wrapper">
                            <Sidebar/>
                            <div className="main-panel">
                                <div className="content-wrapper">
                                    <div className="row">
                                        <Container maxWidth="xl">
                                            <OwnerContainer/>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Provider>
            </>
        )}
        />
    )
}

export const BookingRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div className="container-scroller">
                    <TopBar/>
                    <div className="container-fluid page-body-wrapper">
                        <Sidebar/>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <Container maxWidth="sm">
                                        <Provider store={createStore(bookingListCounter)}>
                                            <BookingSearch/>
                                        </Provider>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
        />
    )
}


export const ChatRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div className="container-scroller">
                    <Provider store={createStore(reducers)}>
                        <ChatApp/>
                    </Provider>
                </div>
            </>
        )}/>)
}

export const UserTransactionRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div className="col-12 justify-content-center">
                    <Header/>
                    <div className="container col-9 m-t-25">
                        <Provider store={createStore(UserReducer)}>
                            <UserTransaction/>
                        </Provider>
                    </div>
                </div>
            </>
        )}/>)
}
