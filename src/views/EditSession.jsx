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
import { getSessionById, updateSession } from "../requests/sessions.jsx"
import TimeInputPolyfill from 'react-time-input-polyfill'
import { Link } from "react-router-dom"

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
      editable: false,
      edited: false,
      saving: false,
      loading: true,
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
      sessionDate: {},
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
        sessionDate: {},
      },
      attachments: [],
    }

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  getSessionInfo() {
    let { temp_info } = this.state;
    temp_info.sessionId = window.location.pathname.split('/')[2];
    this.setState({sessionId: window.location.pathname.split('/')[2], temp_info, loading: true});
    getSessionById(window.location.pathname.split('/')[2]).then((response) => {
      if (response.status) {
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
          sponsors,
          sessionDate,
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
        temp_info.sessionDate = sessionDate;

        this.setState({
          sessionName,
          sessionTitle,
          companyName,
          event,
          // files: [...files], // concept of deep copy
          files,
          startTime,
          translationLanguages,
          translationPrice,
          yourLanguage,
          sponsors,
          temp_info,
          events,
          mySponsors,
          sessionDate,
          loading: false,
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
    const date = moment(day).format("YYYY-MM-DD");
    const fromHours = moment(temp_info.sessionDate.from).hours();
    const fromMinutes = moment(temp_info.sessionDate.from).minutes();
    const ToHours = moment(temp_info.sessionDate.to).hours();
    const ToMinutes = moment(temp_info.sessionDate.to).minutes();

    temp_info.sessionDate.from = moment(date).set({hour: fromHours, minute: fromMinutes}).format();
    temp_info.sessionDate.to = moment(date).set({hour: ToHours, minute: ToMinutes}).format();

    this.setState({temp_info, edited: true});
  }

  handleFromTimeChange = (time) => {
    let { temp_info } = this.state;
    temp_info.sessionDate.from = moment(temp_info.sessionDate.from).set({ hour: parseInt(time.value.split(':')[0]), minute: parseInt(time.value.split(':')[1]) }).format();
    
    this.setState({temp_info, edited: true});
  }
  
  handleToTimeChange = (time) => {
    let { temp_info } = this.state;
    temp_info.sessionDate.to = moment(temp_info.sessionDate.to).set({ hour: parseInt(time.value.split(':')[0]), minute: parseInt(time.value.split(':')[1]) }).format();
    
    this.setState({temp_info, edited: true});
  }

  handleTranslationPriceChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.translationPrice = parseInt(eve.target.value);
    
    this.setState({temp_info, edited: true});
  }

  handleFileRemove = (eve, idx) => {
    let { temp_info } = this.state;
    let files = [];

    temp_info.files.forEach(function(file) {
      files.push(file);
    });

    files.splice(idx, 1);
    temp_info.files = files;

    this.setState({temp_info, edited: true});
  }

  handleAttachmentsRemove = (eve, idx) => {
    let { attachments } = this.state;

    attachments.splice(idx, 1);
    this.setState({attachments, edited: true});
  }

  toggleEdit() {
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
      sponsors,
      sessionDate, 
    } = this.state;
    let {temp_info} = this.state
    temp_info.sessionName = sessionName
    temp_info.sessionTitle = sessionTitle
    temp_info.companyName = companyName
    temp_info.event = event
    temp_info.files = files
    temp_info.startTime = startTime
    temp_info.translationLanguages = translationLanguages
    temp_info.translationPrice = translationPrice
    temp_info.yourLanguage = yourLanguage
    temp_info.sponsors = sponsors
    temp_info.sessionDate = sessionDate

    this.setState({editable: !this.state.editable, temp_info});
  }

  handleSave() {
    const { temp_info, attachments } = this.state;
    const data = new FormData();
    const sessionData = JSON.stringify(temp_info);
    
    attachments.forEach(function(file) {
      data.append("files", file);
    });
    data.append("sessionInfo", sessionData);
    
    this.setState({saving: true});
    updateSession(data).then((response) => {
      this.setState({
        editable: !this.state.editable,
        sessionId: response.data.sessionId,
        sessionName: response.data.sessionName,
        sessionTitle: response.data.sessionTitle,
        companyName: response.data.companyName,
        event: response.data.event,
        files: response.data.files,
        translationLanguages: response.data.translationLanguages,
        translationPrice: response.data.translationPrice,
        yourLanguage: response.data.yourLanguage,
        sponsors: response.data.sponsors,
        sessionDate: response.data.sessionDate,
      });
    });
  }

  handleFileChange(eve) {
    const { files } = eve.target;
    let temp = [...this.state.attachments];

    for( const key in Object.keys(files)) {
      temp.push(files[key]);
    }

    this.setState({attachments: temp, edited: true});
  }

  render() {
    const { 
      sessionName,
      sessionTitle,
      companyName,
      event,
      files,
      translationLanguages,
      translationPrice,
      yourLanguage,
      editable,
      events,
      sponsors,
      mySponsors,
      sessionDate,
      saving,
      edited,
      loading,
      attachments,
    } = this.state;

    let temp_files = this.state.temp_info.files
    
    let language_list = [];
    translationLanguages.forEach(function(language) {
      language_list.push({name: language});
    });

    let allSponsors = [];
    mySponsors.forEach(function(sponsor) {
      allSponsors.push({
        // id: sponsor.sponsorId,
        name: sponsor.sponsorName
      });
    });

    let selectedSponsors = [];
    sponsors.forEach(function(sponsor) {
      selectedSponsors.push({
        id: sponsor.id,
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
                            <Button disabled={!edited || saving} bsStyle="info" pullRight fill type="submit" onClick={() => this.handleSave()} style={{marginRight: "15px"}}>
                              {saving ? "Saving......" : "Save"}
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
                            id="translation_select"
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
                            id="sessionDate"
                            format="YYYY-MM-DD"
                            onDayChange={this.handleDayChange}
                            className="form-control"
                            // placeholder={moment(startTime).format("MM/DD/YYYY")}
                            // defaultValue={moment(sessionDate.from).format("MM/DD/YYYY")}
                          />
                        : <h5 style={{padding: "8px"}}>{!loading && moment(sessionDate.from).format("YYYY-MM-DD")}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-4" style={{paddingLeft: "20px"}}>
                      <ControlLabel>Time(From - To)</ControlLabel>
                      {editable 
                        ?
                          <div style={{display: "flex", margin: "0px 10px"}}>
                            <TimeInputPolyfill id="timeFrom" className="session-timepicker form-control" step={900} onChange={this.handleFromTimeChange}/>
                            <TimeInputPolyfill id="timeTo" className="session-timepicker form-control" step={900} onChange={this.handleToTimeChange}/>
                          </div>
                        : <h5 style={{padding: "8px"}}>{!loading && `${moment(sessionDate.from).format("HH:mm")} - ${moment(sessionDate.to).format("HH:mm")}`}</h5>
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
                        : <h5 style={{padding: "8px"}}>{!loading && `${translationPrice}$`}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="relatedFile" className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                      <ControlLabel>Files</ControlLabel>
                      {editable
                        ?
                          <>
                            <div>
                              <label className="custom-file-upload">
                                <input type="file" multiple onChange={(eve) => this.handleFileChange(eve)}/>
                                <i className="fa fa-cloud-upload" /> Browse
                              </label>
                            </div>
                            <div style={{display: "flex", marginTop: "10px"}}>
                              {temp_files.map((file, idx) => {
                                return (
                                  <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                    <label style={{color: "white",fontSize: "14px", textTransform: "none", margin: "0px"}}>{file.file_name}</label>
                                    <label value={idx} style={{color: "white", fontSize: "17px", fontWeight: "bold", margin: "0px", padding: "0px 3px"}} onClick={(evt)=>this.handleFileRemove(evt,idx)}>×</label>
                                  </div>
                                )
                              })}
                              {attachments.map((file, idx) => {
                                return (
                                  <div key={idx} style={{padding: "2px 8px", margin: "0px 8px", backgroundColor: "#04B5FA", borderRadius: "10px"}}>
                                    <label style={{color: "white",fontSize: "14px", textTransform: "none", margin: "0px"}}>{file.name}</label>
                                    <label value={idx} style={{color: "white", fontSize: "17px", fontWeight: "bold", margin: "0px", padding: "0px 3px"}} onClick={(evt)=>this.handleAttachmentsRemove(evt,idx)}>×</label>
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
                                  <a href={file.path} style={{color: "white"}} download={file.file_name}>{file.file_name}</a>
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
                            id="sponsor_select"
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
                                  <Link to={`/sponsors/${sponsor.id}`}>
                                    <label style={{color: "white", margin: "0px"}}>{sponsor.name}</label>
                                  </Link>
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
