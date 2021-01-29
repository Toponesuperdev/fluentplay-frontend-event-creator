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
import { getSessionById, updateSession } from "../requests/sessions.jsx"

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
      editable: false,
      edited: false,
      saving: false,
      sessionId: "",
      sessionName: "",
      sessionTitle: "",
      companyName: "",
      event: {},
      files: [],
      startTime: "",
      translationLanguages: [],
      translationPrice: 0,
      yourLanguage: "",
      events: [],
      sponsors: [],
      mySponsors: [],
      temp_info: {
        sessionId: "",
        sessionName: "",
        sessionTitle: "",
        companyName: "",
        event: {},
        files: [],
        startTime: "",
        translationLanguages: [],
        translationPrice: 0,
        yourLanguage: "",
        sponsors: [],
      }
    }

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  getSessionInfo() {
    let { temp_info } = this.state;
    temp_info.sessionId = window.location.pathname.split('/')[2];
    this.setState({sessionId: window.location.pathname.split('/')[2], temp_info});
    getSessionById(window.location.pathname.split('/')[2]).then((response) => {
      if (response.status) {
        const { 
          sessionName,
          sessionTitle,
          companyName,
          event,
          files,startTime,
          translationLanguages,
          translationPrice,
          yourLanguage,
          sponsors
        } = response.data.sessionInfo;
        const { events, mySponsors } = response.data;
        temp_info.sessionName = sessionName;
        temp_info.sessionTitle = sessionTitle;
        temp_info.companyName = companyName;
        temp_info.event = event;
        temp_info.files = files;
        temp_info.startTime = startTime;
        temp_info.translationLanguages = translationLanguages;
        temp_info.translationPrice = translationPrice;
        temp_info.yourLanguage = yourLanguage;
        temp_info.sponsors = sponsors;

        this.setState({
          sessionName,
          sessionTitle,
          companyName,
          event,
          files,
          startTime,
          translationLanguages,
          translationPrice,
          yourLanguage,
          sponsors,
          temp_info,
          events,
          mySponsors
        })
      }
    });
  }

  componentWillMount() {
    this.getSessionInfo();
  }

  handleDayChange(day) {
    // console.log(day);
    // this.setState({ selectedDay: day });
  }

  handleNameChange = (eve) => {
    session_param.name = eve.target.value
  }

  handleTitleChange = (eve) => {
    session_param.title = eve.target.value
  }

  handleCompanyNameChange = (eve) => {
    session_param.company_name = eve.target.value
  }

  handleYourLanguageChange = (eve) => {
    session_param.your_language = eve.target.value
  }

  handleTranslationLanguageChange = (eve) => {
    session_param.translation_language = eve.target.value
  }

  handleStartTimeChange = (eve) => {
    session_param.start_time = eve.target.value
  }

  toggleEdit() {
    console.log(session_param)
    this.setState({editable: !this.state.editable});
  }

  render() {
    const { 
      sessionName,
      sessionTitle,
      companyName,
      event,
      files,
      startTime,
      translationLanguages,
      translationPrice,
      yourLanguage,
      editable,
      events,
      sponsors,
      mySponsors,
    } = this.state;
    
    let language_list = [];
    translationLanguages.forEach(function(language) {
      language_list.push({name: language});
    });

    let allSponsors = [];
    mySponsors.forEach(function(sponsor) {
      allSponsors.push({
        id: sponsor.sponsorId,
        name: sponsor.sponsorName
      });
    });

    let selectedSponsors = [];
    sponsors.forEach(function(sponsor) {
      selectedSponsors.push({
        name: sponsor.sponsorName
      });
    });

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
                            defaultValue={sessionName}
                            onChange={this.handleNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{sessionName}</h5>
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
                            defaultValue={companyName}
                            onChange={this.handleCompanyNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{companyName}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="event" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Event</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={event.name}
                            onChange={this.handleYourLanguageChange}
                          >
                            {events.map((eve, idx) => {
                              return (
                                <option key={idx}>{eve.eventName}</option>
                              )
                            })}
                          </FormControl>
                        : <h5 style={{padding: "8px"}}>{event.name}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="yourLanguage" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>Your Language</ControlLabel>
                      {editable
                        ?
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={yourLanguage}
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
                        : <h5 style={{padding: "8px"}}>{yourLanguage}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="translationLanguage">
                      <ControlLabel>Translation Language</ControlLabel>
                      {editable 
                        ? 
                          <Multiselect
                            options={language_list}
                            selectedValues={language_list}
                            // onSelect={this.onSelect}
                            // onRemove={this.onRemove}
                            closeIcon="cancel"
                            displayValue="name"
                          />
                        : 
                          <div style={{display: "flex"}}>
                            {translationLanguages.map((translationLanguage, idx) => {
                              return (
                                <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                  <label style={{color: "white", margin: "0px"}}>{translationLanguage}</label>
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
                            defaultValue={sessionTitle}
                            onChange={this.handleTitleChange}
                          />
                        : <h5 style={{padding: "8px"}}>{sessionTitle}</h5>
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
                            placeholder={moment(startTime).format("MM/DD/YYYY")}
                          />
                        : <h5 style={{padding: "8px"}}>{moment(startTime).format("MM/DD/YYYY")}</h5>
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
                            defaultValue={translationPrice}
                            onChange={this.handleTranslationPriceChange}
                          />
                        : <h5 style={{padding: "8px"}}>{translationPrice}$</h5>
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
                              {files.map((file, idx) => {
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
                            {files.map((file, idx) => {
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
                            options={allSponsors}
                            selectedValues={selectedSponsors}
                            // onSelect={this.onSelect}
                            // onRemove={this.onRemove}
                            closeIcon="cancel"
                            displayValue="name"
                          />
                        : 
                          <div style={{display: "flex"}}>
                            {selectedSponsors.map((sponsor, idx) => {
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
