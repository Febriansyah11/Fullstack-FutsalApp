import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import logo from './logo1.jpg'
class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                        <div className="container">
                            <a className="navbar-brand"><div className="navbar-brand">
                                LetsFutsal.com
                            </div></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="lni-menu"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#hero-area">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#feature">
                                            Feature
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services">
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#team">
                                            Team
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Router>
            </div>
        );
    }
}

export default Header;
