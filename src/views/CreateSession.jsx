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
import Button from "components/CustomButton/CustomButton.jsx";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Multiselect } from 'multiselect-react-dropdown';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';


import mockup_data from "../mockup_data.json"
const event_list = mockup_data.events;
const sponsor_list = mockup_data.sponsors;

class CreateSession extends Component {

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
                    <FormGroup controlId="event" className="col-md-4" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Event</ControlLabel>
                        <FormControl
                          componentClass="select"
                          bsClass="form-control"
                          defaultValue=""
                          onChange={this.handleYourLanguageChange}
                        >
                          {event_list.map((eve, idx) => {
                            return (
                              <option>{eve.name}</option>
                            )
                          })}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="yourLanguage" className="col-md-4" style={{paddingLeft: "0px", paddingRight: "0px"}}>
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
                    <FormGroup controlId="translationLanguage" className="col-md-4" style={{paddingRight: "0px"}}>
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
                    <FormGroup controlId="sessonTitle" className="col-md-4" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Session Title</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input the session title."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-2" style={{paddingLeft: "0px", paddingRight: "10px"}}>
                      <ControlLabel>Date</ControlLabel>
                      <DayPickerInput onDayChange={this.handleDayChange} className="form-control"/>
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-2" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                      <ControlLabel>Time(From - To)</ControlLabel>
                      <div style={{display: "flex", marginLeft: "0px 10px"}}>
                        <TimePicker className="session-timepicker" defaultValue={moment()} showSecond={false} minuteStep={15} />
                        <TimePicker className="session-timepicker" defaultValue={moment()} showSecond={false} minuteStep={15} />
                      </div>
                    </FormGroup>
                    <FormGroup controlId="translationPrice" className="col-md-4" style={{paddingRight: "0px"}}>
                      <ControlLabel>Translation Price</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="number"
                        bsClass="form-control"
                        placeholder="Translation Price"
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="relatedFile" className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                      <ControlLabel>Files</ControlLabel>
                      <div className="custom-file">
                        <input id="inputGroupFile01" type="file" multiple className="custom-file-input from-control" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose files</label>
                      </div>
                    </FormGroup>
                    <FormGroup controlId="sponsors">
                      <ControlLabel>Sponsors</ControlLabel>
                      <Multiselect
                        options={sponsor_list}
                        // selectedValues={this.state.selectedValue}
                        // onSelect={this.onSelect}
                        // onRemove={this.onRemove}
                        displayValue="name"
                      />
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
        </Grid>
      </div>
    );
  }
}

export default CreateSession;
