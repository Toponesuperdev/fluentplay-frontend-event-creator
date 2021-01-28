import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import moment from "moment";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Multiselect } from 'multiselect-react-dropdown';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import mockup_data from "../mockup_data.json"

const sponsor_list = mockup_data.sponsors;

let language_list = [];
mockup_data.language_list.map((language, idx) => {
  language_list.push({id: idx, name: language});
});

const event_list = mockup_data.events;

let session_param = {
  name: "",
  title: "",
  company_name: "",
  your_language: "",
  translation_language: "",
  start_time: "",
  files: [

  ],
  event: ""
}

class SessionInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
      editable: false
    }

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    // console.log(day);
    // this.setState({ selectedDay: day });
  }

  handleNameChange(eve) {
    session_param.name = eve.target.value
  }

  handleTitleChange(eve) {
    session_param.title = eve.target.value
  }

  handleCompanyNameChange(eve) {
    session_param.company_name = eve.target.value
  }

  handleYourLanguageChange(eve) {
    session_param.your_language = eve.target.value
  }

  handleTranslationLanguageChange(eve) {
    session_param.translation_language = eve.target.value
  }

  handleStartTimeChange(eve) {
    session_param.start_time = eve.target.value
  }

  toggleEdit() {
    console.log(session_param)
    this.setState({editable: !this.state.editable});
  }

  render() {
    const { editable } = this.state;
    const urlParams = new URLSearchParams(window.location.search);
    const session_info = {
      name: urlParams.get("name"),
      title: urlParams.get("title"),
      company_name: urlParams.get("company_name"),
      your_language: urlParams.get("your_language"),
      translation_languages: JSON.parse(urlParams.get("translation_languages")),
      translation_price: urlParams.get("translation_price"),
      start_time: urlParams.get("start_time"),
      files: JSON.parse(urlParams.get("files")),
      event: JSON.parse(urlParams.get("event")),
      sponsors: mockup_data.sessions[0].sponsors
    }
    session_param = session_info;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={editable ? "Edit session" : ""}
                content={
                  <div>
                    <FormGroup controlId="sessionName">
                      <ControlLabel>Presentor name</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input presentor's name."
                            defaultValue={session_info.name}
                            onChange={this.handleNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{session_info.name}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="companyName">
                      <ControlLabel>Company or Organization name</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input Company or Organization name."
                            defaultValue={session_info.company_name}
                            onChange={this.handleCompanyNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{session_info.company_name}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="event" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Event</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={session_info.event.name}
                            onChange={this.handleYourLanguageChange}
                          >
                            {event_list.map((eve, idx) => {
                              return (
                                <option key={idx}>{eve.name}</option>
                              )
                            })}
                          </FormControl>
                        : <h5 style={{padding: "8px"}}>{session_info.event.name}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="yourLanguage" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Your Language</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={session_info.your_language}
                            onChange={this.handleYourLanguageChange}
                          >
                              <option>{"Germany"}</option>
                              <option>{"English"}</option>
                              <option>{"Spanish"}</option>
                              <option>{"French"}</option>
                              <option>{"Italian"}</option>
                              <option>{"Japanses"}</option>
                              <option>{"Portuguese"}</option>
                          </FormControl>
                        : <h5 style={{padding: "8px"}}>{session_info.your_language}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="translationLanguage">
                      <ControlLabel>Translation Language</ControlLabel>
                      {editable 
                        ? 
                          <Multiselect
                            options={language_list}
                            // selectedValues={this.state.selectedValue}
                            // onSelect={this.onSelect}
                            // onRemove={this.onRemove}
                            displayValue="name"
                          />
                        : 
                          <div style={{display: "flex"}}>
                            {session_info.translation_languages.map((translation_language, idx) => {
                              return (
                                <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                  <label style={{color: "white", margin: "0px"}}>{translation_language}</label>
                                </div>
                              )
                            })}
                          </div>
                      }
                    </FormGroup>
                    <FormGroup controlId="sessonTitle" className="col-md-4" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Session Title</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input the session title."
                            defaultValue={session_info.title}
                            onChange={this.handleTitleChange}
                          />
                        : <h5 style={{padding: "8px"}}>{session_info.title}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-2" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                      <ControlLabel>From</ControlLabel>
                      {editable
                        ?
                          <DayPickerInput
                            format="MM/dd/yyyy"
                            onDayChange={this.handleDayChange}
                            className="form-control"
                            placeholder={moment(session_info.start_time).format("MM/DD/YYYY")}
                          />
                        : <h5 style={{padding: "8px"}}>{moment(session_info.start_time).format("MM/DD/YYYY")}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-2" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                      <ControlLabel>Time(From - To)</ControlLabel>
                      {editable 
                        ?
                          <div style={{display: "flex", marginLeft: "0px 10px"}}>
                            <TimePicker className="session-timepicker" defaultValue={moment()} showSecond={false} minuteStep={15} />
                            <TimePicker className="session-timepicker" defaultValue={moment()} showSecond={false} minuteStep={15} />
                          </div>
                        :
                          <h5 style={{padding: "8px"}}>{"From - To"}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="translationPrice" className="col-md-4" style={{paddingRight: "0px"}}>
                      <ControlLabel>Translation Price</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            placeholder="Translation Price"
                            defaultValue={session_info.translation_price}
                            onChange={this.handleTranslationPriceChange}
                          />
                        : <h5 style={{padding: "8px"}}>{session_info.translation_price}$</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="relatedFile" className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                      <ControlLabel>Files</ControlLabel>
                      {editable
                        ?
                          <>
                            <div className="custom-file">
                              <input id="inputGroupFile01" type="file" multiple className="custom-file-input from-control" />
                              <label className="custom-file-label" htmlFor="inputGroupFile01">Choose files</label>
                            </div>
                            <div style={{display: "flex", marginTop: "10px"}}>
                              {session_info.files.map((file, idx) => {
                                return (
                                  <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                    <label style={{color: "white",fontSize: "14px", textTransform: "none", margin: "0px"}}>{file.file_name}</label>
                                    <label style={{color: "white", fontSize: "17px", fontWeight: "bold", margin: "0px", padding: "0px 3px"}}>×</label>
                                  </div>
                                )
                              })}
                            </div>
                          </>
                        : 
                          <div style={{display: "flex"}}>
                            {session_info.files.map((file, idx) => {
                              return (
                                <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                  <a href={"https://brainshares.s3-us-west-2.amazonaws.com/full.jpg"} style={{color: "white"}} download={file.file_name}>{file.file_name}</a>
                                </div>
                              )
                            })}
                          </div>
                      }
                    </FormGroup>
                    <FormGroup controlId="sponsors">
                      <ControlLabel>Sponsors</ControlLabel>
                      {editable 
                        ? 
                          <Multiselect
                            options={sponsor_list}
                            // selectedValues={this.state.selectedValue}
                            // onSelect={this.onSelect}
                            // onRemove={this.onRemove}
                            displayValue="name"
                          />
                        : 
                          <div style={{display: "flex"}}>
                            {session_info.sponsors.map((sponsor, idx) => {
                              return (
                                <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                  <label style={{color: "white", margin: "0px"}}>{sponsor.name}</label>
                                </div>
                              )
                            })}
                          </div>
                      }
                    </FormGroup>                    
                    {editable 
                      ? 
                        <>
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                            Cancel
                          </Button>
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()} style={{marginRight: "15px"}}>
                            Save
                          </Button>
                        </>
                      :
                        <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                          Edit
                        </Button>
                    }
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

export default SessionInformation;
