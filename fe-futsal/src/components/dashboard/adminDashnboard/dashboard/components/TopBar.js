import React, {Component} from 'react';
import '../assets/style/main.css'
import {Link} from "react-router-dom";
import MailIcon from '@material-ui/icons/MailOutlineTwoTone'
import IconProfile from '@material-ui/icons/SentimentSatisfiedRounded';
import AuthService from "../../../../services/AuthService";
import ExitToApp from "@material-ui/icons/ExitToAppRounded";
import {connect} from "react-redux";
import AddIcon from '@material-ui/icons/PostAddRounded';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccerOutlined';

class TopBar extends Component {
    render() {
        return (
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center p-2 navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <a className="navbar-brand brand-logo" alt="janck">
                        <h1 className="text-white" style={{fontFamily: 'Eczar', fontSize: 30}}>Let's Futsal</h1></a>
                    <Link className="navbar-brand brand-logo-mini" to="/admin">
                        <SportsSoccerIcon/></Link>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center">
                    <ul className="navbar-nav ml-auto">
                        <Link>
                            <li className="nav-item nav-link btn-link">
                                {AuthService.getName()}
                            </li>
                        </Link>
                        <Link style={{marginTop: 4.5, marginLeft: 15}} onClick={e => this.props.dispatch({
                            type: 'HANDLE_STADIUM_USERID',
                            stadiums: AuthService.getUserId()
                        })} data-toggle="modal" data-target="#exampleModal">
                            <AddIcon color='action'/>
                        </Link>
                        {/*<Link to="/chat">*/}
                        {/*    <li className="nav-item nav-link">*/}
                        {/*        <MailIcon color='action'/>*/}
                        {/*    </li>*/}
                        {/*</Link>*/}
                        {/*<Link to="/">*/}
                        {/*    <li className="nav-item nav-link btn-link">*/}
                        {/*        <ExitToApp color='action'/>*/}
                        {/*    </li>*/}
                        {/*</Link>*/}
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                            type="button" data-toggle="offcanvas">
                        <span className="fas fa-bars"></span>
                    </button>
                </div>
            </nav>

        );
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps)(TopBar);
