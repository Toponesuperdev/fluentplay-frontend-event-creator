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
import 'rc-time-picker/assets/index.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { getSessionById } from "../requests/sessions.jsx"
// import { updateSession } from "../requests/sessions.jsx"
import TimePicker from 'react-bootstrap-time-picker';


const languages = [
  {name: "English"},
  {name: "French"},
  {name: "Germany"},
  {name: "Italian"},
  {name: "Portuguese"},
  {name: "Japanese"}
];

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
        time: {},
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

  handleTransLanguageSelect = (selectedList) => {
    let { temp_info } = this.state;
    let selectedLanguages = [];

    selectedList.forEach(function(language) {
      selectedLanguages.push(language.name);
    });

    temp_info.translationLanguages = selectedLanguages;
    this.setState({temp_info, edited: true});
  }

  handleTransLanguageRemove = (selectedList) => {
    let { temp_info } = this.state;
    let selectedLanguages = [];

    selectedList.forEach(function(language) {
      selectedLanguages.push(language.name);
    });

    temp_info.translationLanguages = selectedLanguages;
    this.setState({temp_info, edited: true});
  }

  handleSponsorSelect = (selectedList) => {
    let { temp_info, mySponsors } = this.state;
    let selectedSponsors = [];

    selectedList.forEach(function(selectedSponsor) {
      mySponsors.forEach(function(sponsor) {
        if (selectedSponsor.name === sponsor.sponsorName)
          selectedSponsors.push(sponsor);
      });
    });

    temp_info.sponsors = selectedSponsors;
    this.setState({temp_info, edited: true});
  }

  handleSponsorRemove = (selectedList) => {
    let { temp_info, mySponsors } = this.state;
    let selectedSponsors = [];

    selectedList.forEach(function(selectedSponsor) {
      mySponsors.forEach(function(sponsor) {
        if (selectedSponsor.name === sponsor.sponsorName)
          selectedSponsors.push(sponsor);
      });
    });

    temp_info.sponsors = selectedSponsors;
    this.setState({temp_info, edited: true});
  }
  
  handleNameChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.sessionName = eve.target.value;
    
    this.setState({temp_info, edited: true});
  }
  
  handleCompanyNameChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.companyName = eve.target.value;
    
    this.setState({temp_info, edited: true});
  }
  
  handleEventChange = (eve) => {
    let { temp_info, events } = this.state;
    
    events.forEach(function(event) {
      if (event.eventName === eve.target.value)
        temp_info.event = event;
      });

      this.setState({temp_info, edited: true});
    }
  
  handleYourLanguageChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.yourLanguage = eve.target.value;

    this.setState({temp_info, edited: true});
  }
  
  handleTitleChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.sessionTitle = eve.target.value;
    
    this.setState({temp_info, edited: true});
  }
  
  handleDayChange(day) {
    let { temp_info } = this.state;
    temp_info.time.from = moment(day).format();
    
    this.setState({temp_info, edited: true});
  }

  handleFromTimeChange = (time) => {
    // let time = document.getElementsByClassName("rc-time-picker-input")[0].value;
    console.log(time, "++++++");
  }
  
  handleToTimeChange = (time) => {
    // console.log(eve.format("HH:MM"), "++++++");
    console.log(time, "++++++");
  }

  handleTranslationPriceChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.translationPrice = parseInt(eve.target.value);
    
    this.setState({temp_info, edited: true});
  }

  toggleEdit() {
    this.setState({editable: !this.state.editable});
  }

  handleSave() {
    const { temp_info } = this.state;
    console.log(temp_info, "+++++++++++++++++++");
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
                    <div className="col-md-12">
                      {editable 
                        ? 
                          <>
                            <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                              Cancel
                            </Button>
                            <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.handleSave()} style={{marginRight: "15px"}}>
                              Save
                            </Button>
                          </>
                        :
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                            Edit
                          </Button>
                      }
                    </div>
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
                            onChange={this.handleEventChange}
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
                    <FormGroup controlId="yourLanguage" className="col-md-6" style={{paddingLeft: "0px", paddingRight: "0px"}}>
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
                            options={languages}
                            selectedValues={language_list}
                            onSelect={this.handleTransLanguageSelect}
                            onRemove={this.handleTransLanguageRemove}
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
                    <FormGroup controlId="sessonTitle" className="col-md-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
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
                    <FormGroup controlId="eventName" className="col-md-4" style={{paddingLeft: "0px", paddingRight: "0px"}}>
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
                    <FormGroup controlId="eventName" className="col-md-4" style={{paddingLeft: "20px"}}>
                      <ControlLabel>Time(From - To)</ControlLabel>
                      {editable 
                        ?
                          <div style={{display: "flex", margin: "0px 10px"}}>
                            {/* <TimePicker className="session-timepicker" showSecond={false} minuteStep={15} onChange={this.handleFromTimeChange}/> */}
                            {/* <TimePicker className="session-timepicker" showSecond={false} minuteStep={15} onChange={this.handleToTimeChange}/> */}
                            <TimePicker className="session-timepicker" start="10:00" end="21:00" step={15} onChange={this.handleFromTimeChange} />
                            <TimePicker className="session-timepicker" start="10:00" end="21:00" step={15} onChange={this.handleToTimeChange} />
                          </div>
                        : <h5 style={{padding: "8px"}}>{"From - To"}</h5>
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
                            onSelect={this.handleSponsorSelect}
                            onRemove={this.handleSponsorRemove}
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
