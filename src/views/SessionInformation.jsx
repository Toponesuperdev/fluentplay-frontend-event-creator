import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { SessionCard } from "components/SessionCard/SessionCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class SessionInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
    }

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create session"
                content={
                  <div>
                    <FormGroup controlId="sessionName">
                      <ControlLabel>Presentor name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input presentor's name."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="companyName">
                      <ControlLabel>Company or Organization name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input Company or Organization name."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="yourLanguage" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Your Language</ControlLabel>
                      <FormControl
                        componentClass="select"
                        bsClass="form-control"
                        placeholder="Input the envent name."
                        defaultValue="">
                          <option>{"Germany"}</option>
                          <option>{"English"}</option>
                          <option>{"Spanish"}</option>
                          <option>{"French"}</option>
                          <option>{"Italian"}</option>
                          <option>{"Japanses"}</option>
                          <option>{"Portuguese"}</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="translationLanguage" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>Translation Language</ControlLabel>
                      <FormControl
                        componentClass="select"
                        bsClass="form-control"
                        placeholder="Input the envent name."
                        defaultValue="">
                          <option>{"Germany"}</option>
                          <option>{"English"}</option>
                          <option>{"Spanish"}</option>
                          <option>{"French"}</option>
                          <option>{"Italian"}</option>
                          <option>{"Japanses"}</option>
                          <option>{"Portuguese"}</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="sessonTitle" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Session Title</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input the session title."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>From - To</ControlLabel>
                      <DayPickerInput onDayChange={this.handleDayChange} className="form-control"/>
                    </FormGroup>
                    <FormGroup controlId="relatedFile" className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                      <ControlLabel>Files</ControlLabel>
                      <div className="custom-file">
                        <input id="inputGroupFile01" type="file" multiple className="custom-file-input from-control" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose files</label>
                      </div>
                    </FormGroup>
                    
                    <Button bsStyle="info" pullRight fill type="submit">
                      Create
                    </Button>
                    <div className="clearfix" />
                  </div>
                }
              />
            </Col>
          </Row>
          <Col md={4}>
            <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 1"
              companyName="Microsoft LLC"
              language="English"
              tranlationLanguage="French"
              from={"2021-02-23"}
              category={"Banking & Finance"}
              description={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
          <Col md={4}>
          <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 1"
              companyName="Amazon LLC"
              language="Germany"
              tranlationLanguage="Japanese"
              from={"2021-02-23"}
              category={"Banking & Finance"}
              description={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
          <Col md={4}>
          <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 3"
              companyName="Google LLC"
              language="English"
              tranlationLanguage="Italian"
              from={"2021-02-23"}
              category={"Banking & Finance"}
              description={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default SessionInformation;
