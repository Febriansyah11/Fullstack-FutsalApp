import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import Trolly from '@material-ui/icons/ShoppingCartOutlined';
import AuthService from "../../../services/AuthService";
import ExitToApp from '@material-ui/icons/ExitToAppRounded';
import IconProfile from '@material-ui/icons/SentimentSatisfiedRounded';
import Swal from "sweetalert2";

class Header extends Component {
    handleClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, leave!'
        }).then((result) => {
            if (result.value) {
                this.props.history.push('/')
                localStorage.removeItem("userInfo")
            }
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                <div className="container">
                    <Link to="/user">
                        <div className="navbar-brand">
                            <div className="navbar-brand text-primary" style={{fontFamily: 'Eczar'}}>LetsFutsal.com
                            </div>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="lni-menu"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                            <Link to="/user">
                                <li className="nav-item active">
                                    <a className="nav-link">
                                        Home
                                    </a>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link count-indicator" id="messageDropdown"
                                   data-toggle="dropdown" aria-expanded="false">
                                    {AuthService.getName()}
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                                     aria-labelledby="messageDropdown" style={{marginTop: -1}}>
                                    <Link to="/profile">
                                        <a className="dropdown-item py-3">
                                            <IconProfile/> &nbsp; Account
                                        </a>
                                    </Link>
                                    <Link to="/transaction">
                                        <a className="dropdown-item py-3">
                                            <Trolly/> &nbsp; Your Order
                                        </a>
                                    </Link>
                                    <Link onClick={this.handleClick}>
                                        <a className="dropdown-item py-3">
                                            <ExitToApp/> &nbsp; Logout
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
