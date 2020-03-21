import React, {Component} from 'react';
import '../assets/style/main.css'
import {Link, withRouter} from "react-router-dom";
import Swal from "sweetalert2";

class Sidebar extends Component {
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
            <nav className="sidebar sidebar-offcanvas position-fixed" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-category text-center text-white">Main Menu</li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                            <i className="fab fa-dashboard"/>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stadium">
                            <i className="menu-icon typcn typcn-shopping-bag"></i>
                            <span className="menu-title">Stadium</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat">
                            <i className="menu-icon typcn typcn-shopping-bag"></i>
                            <span className="menu-title">Message</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleClick}>
                            {/*{localStorage.removeItem("userInfo")}*/}
                            <i className="menu-icon typcn typcn-th-large-outline"></i>
                            <span className="menu-title">Log out</span>
                        </Link>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <Link className="nav-link" to="/history">*/}
                    {/*        <i className="menu-icon typcn typcn-bell"></i>*/}
                    {/*        <span className="menu-title">History Transaction</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        );
    }
}

export default withRouter(Sidebar);
