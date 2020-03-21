import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FETCH_ROLES } from "../../role/action/action";
import { findAllRole } from "../../role/service/RoleService";
import { registerUser } from "../service/UserService";
import { connect } from "react-redux";
import "../assets/style/user.css";

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        password: "",
        email: "",
        address: "",
        phoneNumber: "",
        idRolesTransient: ""
      },
      file: ""
    };
  }

  render() {
    console.log(this.props.roles, "test");
    return (
      <section className="signup">
        <div className="container-user">
          <div className="signup-content">
            <form id="signup-form" className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  onChange={this.handleInputName}
                  require
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={this.handelInputEmail}
                  aria-describedby="email"
                  require
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="userName"
                  placeholder="Username"
                  onChange={this.handleInputUsername}
                  aria-describedby="text"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  onChange={this.handleInputPhoneNumber}
                  required="number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={this.handleInputAddress}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleInputPassword}
                  required="number"
                />
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  {this.props.rolesReducers.roles.map((role, index) => {
                    return (
                      <div onChange={this.handleInputIdRolesTransient}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          value={role.idRoles}
                          style={{ marginLeft: "10px" }}
                        />
                        <label className="form-check-label">
                          {role.rolesName}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <input
                type="file"
                accept=".jpg, .png"
                formEncType="multipart/form-data"
                onChange={this.onFileChangeHandler}
                className="m-1"
              />
              <div className="form-group">
                <input
                  id="submit"
                  className="form-submit"
                  value="Sign up "
                  onClick={this.handleSubmit}
                  type="submit"
                  name="action"
                />
              </div>
            </form>
            <p className="loginhere">
              Have already an account ?{" "}
              <Link to="/login" className="loginhere-link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  onFileChangeHandler = event => {
    let img = event.target.files[0];
    this.setState({ img: img });
  };

  handleInputName = event => {
    this.state.user.name = event.target.value;
  };

  handleInputUsername = event => {
    this.state.user.username = event.target.value;
  };

  handleInputPassword = event => {
    this.state.user.password = event.target.value;
  };

  handelInputEmail = event => {
    this.state.user.email = event.target.value;
  };

  handleInputAddress = event => {
    this.state.user.address = event.target.value;
  };

  handleInputPhoneNumber = event => {
    this.state.user.phoneNumber = event.target.value;
  };

  handleInputIdRolesTransient = event => {
    this.state.user.idRolesTransient = event.target.value;
  };

  handleSubmit = event => {
    event.preventDefault();
    registerUser(this.state.user, this.state.img)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/login");
        } else {
          this.props.history.push("/register");
        }
      })
      .catch(err => {
        this.props.history.push("/register");
      });
  };

  async componentDidMount() {
    const roles = await findAllRole();
    this.props.dispatch({ ...FETCH_ROLES, payload: roles });
  }
}

const handleAll = state => {
  return { ...state };
};

export default withRouter(connect(handleAll)(UserSignUp));
