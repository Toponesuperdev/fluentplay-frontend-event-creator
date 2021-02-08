/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  // Grid,
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel,
  // FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { login } from "../requests/auth.jsx"
// import avatar from "assets/img/faces/face-3.jpg";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errMsg: ""
    }
  }

  handleClick = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    if ( !data.email.length || !data.password.length) {
      this.setState({errMsg: "Email or Password is incorrect."});
      return;
    }

    login(data).then((response) => {
      if (response.status) {
        // localStorage.setItem("email", data.email);
        this.props.history.push("/events");
      } else {
        this.setState({errMsg: response.message});
      }
    });
  }

  handleEmailChange = (eve) => {
    this.setState({email: eve.target.value});
  }

  handlePasswordChange = (eve) => {
    this.setState({password: eve.target.value});
  }

  render() {
    return (
      <div className="content">
        <div className="avatar-container">
          <Row>
            <Col md={12}>
              <Card
                title="Log In"
                content={
                  <div>
                    <FormGroup controlId="sponsorName">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="email"
                        className="col-md-12"
                        bsClass="form-control"
                        placeholder="Input email address."
                        style={{marginBottom: "20px"}}
                        onChange={this.handleEmailChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="sponsorName">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="password"
                        className="col-md-12"
                        bsClass="form-control"
                        placeholder="Confirm your password."
                        style={{marginBottom: "20px"}}
                        onChange={this.handlePasswordChange}
                      />
                    </FormGroup>
                    <p><Link to="/signup">Sign Up</Link></p>
                    <Button bsStyle="info" pullRight fill onClick={this.handleClick}>
                      Log in
                    </Button>
                    <p>{this.state.errMsg}</p>
                    <div className="clearfix" />
                  </div>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LogIn;
