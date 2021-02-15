import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { signUp } from "../requests/auth.jsx"

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm: "",
      errMsg: ""
    }
  }

  handleClick = () => {
    const { email, password, confirm } = this.state;

    if (password !== confirm) {
      this.setState({errMsg: "The password does not match."})
      return;
    }

    let param = {
      email,
      password,
    }

    signUp(param).then((response) => {
      if (response.status) {
        this.props.history.push("/profile");
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

  handleConfirmPasswordChange = (eve) => {
    const { password } = this.state;

    if (password !== eve.target.value) {
      this.setState({confirm: eve.target.value, errMsg: "The password does not match."});
      // console.log(password, "++++++++++++++++++");
    } else {
      this.setState({confirm: eve.target.value, errMsg: ""});
      // console.log(password, confirm, "++++++++++++++++++");
    } 
  }

  render() {
    return (
      <div className="content">
        <div className="avatar-container">
          <Row>
            <Col md={12}>
              <Card
                title="Sign Up"
                content={
                  <div>
                    <FormGroup controlId="email">
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
                    <FormGroup controlId="password">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="password"
                        className="col-md-12"
                        bsClass="form-control"
                        placeholder="Password"
                        style={{marginBottom: "20px"}}
                        onChange={this.handlePasswordChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="confirm">
                      <ControlLabel>Confirm password</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="password"
                        className="col-md-12"
                        bsClass="form-control"
                        placeholder="Password confirmation"
                        style={{marginBottom: "20px"}}
                        onChange={this.handleConfirmPasswordChange}
                      />
                    </FormGroup>
                    <p><Link to="/">Log In</Link></p>
                    <Button bsStyle="info" pullRight fill onClick={this.handleClick}>
                      Sign Up
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

export default SignUp;
