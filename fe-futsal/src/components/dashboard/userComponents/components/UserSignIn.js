import React, {Component} from 'react';
import '../assets/style/user.css';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import AuthService from "../../../services/AuthService";
import Swal from "sweetalert2";

class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: '',
        }
    }

    componentDidMount() {
        localStorage.clear();
    }

    login = (event) => {
        event.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };
        AuthService.login(credentials).then(res => {
            if (res.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify(res.data.jwt));
                localStorage.setItem("userRole", JSON.stringify(res.data.role));
                localStorage.setItem("userName", JSON.stringify(res.data.userName));
                localStorage.setItem("userId", JSON.stringify(res.data.userId));
                if (res.data.role === 1) {
                    this.props.history.push('/user');
                } else {
                    this.props.history.push('/admin');
                }
            }
        }).catch(err => {
            Swal.fire(
                'Failed',
                'Username/Password wrong!',
                'error',
            )
        })
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <section className="signup">
                <div className="container-user">
                    <div className="signup-content">
                        <form id="signup-form" className="signup-form">
                            <h2 className="form-title">Login</h2>
                            <div className="form-group">
                                <input type="text" className="form-input" value={this.state.username} name="username"
                                       onChange={this.onChange} id="name"
                                       placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-input" value={this.state.password}
                                       name="password" onChange={this.onChange} id="password"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" name="submit" id="submit" className="form-submit"
                                        onClick={this.login}
                                >Sign In
                                </button>
                            </div>
                        </form>
                        <p className="loginhere">
                            Don't have an account ? <Link to="/register" className="loginhere-link">Register here</Link>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(UserSignIn)
