import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { Multiselect } from 'multiselect-react-dropdown';
import Button from "components/CustomButton/CustomButton.jsx";
import DeleteButtonImage from "../assets/img/Delete.svg";
import AddButtonImage from "../assets/img/Add.svg";
import { getUser, updateProfile } from "../requests/users.jsx"

const languages = [
  {name: "English"},
  {name: "French"},
  {name: "Germany"},
  {name: "Italian"},
  {name: "Portuguese"},
  {name: "Japanese"}
];

const categories = [
  {name: "Art"},
  {name: "Association"},
  {name: "Auto & Air"},
  {name: "Banking & Finance"},
  {name: "Business"},
  {name: "Charity"},
  {name: "Climate & Environment"},
];

const Timelinelist = [
  {id: 0, str: "00:00 am", value: "00:00"},
  {id: 1, str: "00:30 am", value: "00:30"},
  {id: 2, str: "01:00 am", value: "01:00"},
  {id: 3, str: "01:30 am", value: "01:30"},
  {id: 4, str: "02:00 am", value: "02:00"},
  {id: 5, str: "02:30 am", value: "02:30"},
  {id: 6, str: "03:00 am", value: "03:00"},
  {id: 7, str: "03:30 am", value: "03:30"},
  {id: 8, str: "04:00 am", value: "04:00"},
  {id: 9, str: "04:30 am", value: "04:30"},
  {id: 10, str: "05:00 am", value: "05:00"},
  {id: 11, str: "05:30 am", value: "05:30"},
  {id: 12, str: "06:00 am", value: "06:00"},
  {id: 13, str: "06:30 am", value: "06:30"},
  {id: 14, str: "07:00 am", value: "07:00"},
  {id: 15, str: "07:30 am", value: "07:30"},
  {id: 16, str: "08:00 am", value: "08:00"},
  {id: 17, str: "08:30 am", value: "08:30"},
  {id: 18, str: "09:00 am", value: "09:00"},
  {id: 19, str: "09:30 am", value: "09:30"},
  {id: 20, str: "10:00 am", value: "10:00"},
  {id: 21, str: "10:30 am", value: "10:30"},
  {id: 22, str: "11:00 am", value: "11:00"},
  {id: 23, str: "11:30 am", value: "11:30"},
  {id: 24, str: "12:00 pm", value: "12:00"},
  {id: 25, str: "12:30 pm", value: "12:30"},
  {id: 26, str: "01:00 pm", value: "13:00"},
  {id: 27, str: "01:30 pm", value: "13:30"},
  {id: 28, str: "02:00 pm", value: "14:00"},
  {id: 29, str: "02:30 pm", value: "14:30"},
  {id: 30, str: "03:00 pm", value: "15:00"},
  {id: 31, str: "03:30 pm", value: "15:30"},
  {id: 32, str: "04:00 pm", value: "16:00"},
  {id: 33, str: "04:30 pm", value: "16:30"},
  {id: 34, str: "05:00 pm", value: "17:00"},
  {id: 35, str: "05:30 pm", value: "17:30"},
  {id: 36, str: "06:00 pm", value: "18:00"},
  {id: 37, str: "06:30 pm", value: "18:30"},
  {id: 38, str: "07:00 pm", value: "19:00"},
  {id: 39, str: "07:30 pm", value: "19:30"},
  {id: 40, str: "08:00 pm", value: "20:00"},
  {id: 41, str: "08:30 pm", value: "20:30"},
  {id: 42, str: "09:00 pm", value: "21:00"},
  {id: 43, str: "09:30 pm", value: "21:30"},
  {id: 44, str: "10:00 pm", value: "22:00"},
  {id: 45, str: "10:30 pm", value: "22:30"},
  {id: 46, str: "11:00 pm", value: "23:00"},
  {id: 47, str: "11:30 pm", value: "23:30"}
];

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
      company: "",
      title: "",
      website: "",
      errMsg: "",
      isTranslator: false,
      yourLanguage: "",
      toLanguages: [],
      expertise: [],
      interpretedCompany: "",
      mobileNumber: "",
      payerID: "",
      currencyCode: "",
      priceFor30min: "",
      priceFor90min: "",
      userPosition: "",
      availableRecurrenceTimeList: [
        {
          dayOfWeek: "Sunday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Monday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Tuesday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Wednesday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Thursday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Friday",
          timeList: [],
          status: false
        },
        {
          dayOfWeek: "Saturday",
          timeList: [],
          status: false
        }
      ],
      selectedExpertise: [],
      selectedToLanguages: []
    };
  }

  componentWillMount() {
    getUser().then((response) => {
      if (response.status) {
        const { isTranslator } = response.data;
        if (isTranslator) {
          const { userId, userEmail, userName, company, website, availableRecurrenceTimeList, currencyCode, expertise, interpretedCompany, mobileNumber, payerID, priceFor30min, priceFor90min, toLanguages, userPosition, yourLanguage } = response.data;
          let selectedExpertise = [];
          let selectedToLanguages = [];

          for (const idx in expertise)
            selectedExpertise.push({name: expertise[idx]});

          for (const idx in toLanguages)
            selectedToLanguages.push({name: toLanguages[idx]});

          this.setState({userId, email: userEmail, userName, company, isTranslator, website, availableRecurrenceTimeList, currencyCode, selectedExpertise, interpretedCompany, mobileNumber, payerID, priceFor30min, priceFor90min, selectedToLanguages, userPosition, yourLanguage});
        } else {
          const { company, userEmail, title, userName, website } = response.data;
          this.setState({company, email: userEmail, isTranslator, title, userName, website});
        }
      }
    });
  }

  handleEmailChange = (eve) => {
    this.setState({email: eve.target.value});
  }

  handlePasswordChange = (eve) => {
    this.setState({password: eve.target.value});
  }

  handleConfirmChange = (eve) => {
    if (this.state.password !== eve.target.value) {
      this.setState({errMsg: "The password does not match"});
    } else {
      this.setState({errMsg: ""});
    }

    this.setState({confirmPassword: eve.target.value});
  }

  handleNameChange = (eve) => {
    this.setState({userName: eve.target.value});
  }

  handleCompanyChange = (eve) => {
    this.setState({company: eve.target.value});
  }

  handleTitleChange = (eve) => {
    this.setState({title: eve.target.value});
  }

  handleWebsiteChange = (eve) => {
    this.setState({website: eve.target.value});
  }

  handleYourLanguageChange = (eve) => {
    this.setState({yourLanguage: eve.target.value});
  }

  handleLanguageToSelect = (selectedList) => {
    let toLanguages = [];

    selectedList.forEach(function(language) {
      toLanguages.push(language.name);
    });

    this.setState({toLanguages});
  }

  handleLanguageToRemove = (selectedList) => {
    let toLanguages = [];

    selectedList.forEach(function(language) {
      toLanguages.push(language.name);
    });

    this.setState({toLanguages});
  }

  handleExpertiseSelect = (selectedList) => {
    let expertise = [];

    selectedList.forEach(function(item) {
      expertise.push(item.name);
    });

    this.setState({expertise});
  }

  handleExpertiseRemove = (selectedList) => {
    let expertise = [];

    selectedList.forEach(function(item) {
      expertise.push(item.name);
    });

    this.setState({expertise});
  }

  handleInterpretedCompanyChange = (eve) => {
    this.setState({interpretedCompany: eve.target.value});
  }

  handleMobileNumberChange = (eve) => {
    this.setState({mobileNumber: eve.target.value});
  }

  handlePayerIDChange = (eve) => {
    this.setState({payerID: eve.target.value});
  }

  handleCurrencyCodeChange = (eve) => {
    this.setState({currencyCode: eve.target.value});
  }

  handle30MinsRateChange = (eve) => {
    this.setState({priceFor30min: eve.target.value});
  }

  handle90MinsRateChange = (eve) => {
    this.setState({priceFor90min: eve.target.value});
  }

  handleTranslatorChange = () => {
    this.setState({isTranslator: !this.state.isTranslator});
  }

  handleAdd(dayIdx) {
    let { availableRecurrenceTimeList } = this.state;
    availableRecurrenceTimeList[dayIdx].timeList.push({ fromTimeStr: "00:00 am", toTimeStr: "00:00 am" });
    availableRecurrenceTimeList[dayIdx].status = true;

    this.setState({
      availableRecurrenceTimeList,
    });
  }

  handleDelete(dayIdx, idx) {
    let { availableRecurrenceTimeList } = this.state;
    
    if (availableRecurrenceTimeList[dayIdx].timeList.length === 1) {
      availableRecurrenceTimeList[dayIdx].timeList.splice(idx, 1);
    } else {
      availableRecurrenceTimeList[dayIdx].timeList.splice(idx, 1);
    }

    if (!availableRecurrenceTimeList[dayIdx].timeList.length)
      availableRecurrenceTimeList[dayIdx].status = false;

    this.setState({
      availableRecurrenceTimeList,
    });
  }

  handleUpdateto(dayIdx, timeIdx, e) {
    let { availableRecurrenceTimeList } = this.state;
    let timeStr = "";
    for (var i = 0; i < Timelinelist.length; i++) {
      if (parseInt(e.target.value) === Timelinelist[i].id) {
        timeStr = Timelinelist[i].str;
      }
    }
    
    availableRecurrenceTimeList[dayIdx].timeList[timeIdx].toTimeStr = timeStr;
    this.setState({
      availableRecurrenceTimeList,
    });
  }

  handleUpdatefrom(dayIdx, timeIdx, e) {
    let { availableRecurrenceTimeList } = this.state;
    let timeStr = "";
    for (var i = 0; i < Timelinelist.length; i++) {
      if (parseInt(e.target.value) === Timelinelist[i].id) {
        timeStr = Timelinelist[i].str;
      }
    }
    
    availableRecurrenceTimeList[dayIdx].timeList[timeIdx].fromTimeStr = timeStr;
    this.setState({
      availableRecurrenceTimeList: availableRecurrenceTimeList,
    });
  }

  handlePositionChange = (eve) => {
    this.setState({userPosition: eve.target.value});
  }

  handleProfileUpdate = () => {
    const { isTranslator } = this.state;
    let param = {};
    if (isTranslator) {
      const {userName, email, password, company, website, yourLanguage, toLanguages, expertise, mobileNumber, payerID, currencyCode, priceFor30min, priceFor90min, userPosition, availableRecurrenceTimeList, interpretedCompany} = this.state;
      param.isTranslator = isTranslator;
      param.userName = userName;
      param.email = email;
      param.password = password;
      param.company = company;
      param.website = website;
      param.yourLanguage = yourLanguage;
      param.toLanguages = toLanguages;
      param.expertise = expertise;
      param.interpretedCompany = interpretedCompany;
      param.mobileNumber = mobileNumber;
      param.payerID = payerID;
      param.currencyCode = currencyCode;
      param.priceFor30min = priceFor30min;
      param.priceFor90min = priceFor90min
      param.userPosition = userPosition;
      param.availableRecurrenceTimeList = availableRecurrenceTimeList;
    } else {
      const {userName, email, password, company, title, website} = this.state;
      param.isTranslator = isTranslator;
      param.userName = userName;
      param.email = email;
      param.password = password;
      param.company = company;
      param.title = title;
      param.website = website;
    }

    updateProfile(param).then((response) => {
      console.log(response, "+++++++++++++");
    });
  }

  render() {
    const { isTranslator, availableRecurrenceTimeList, email, company, title, userName, website, currencyCode, selectedExpertise, interpretedCompany, mobileNumber, payerID, priceFor30min, priceFor90min, selectedToLanguages, userPosition, yourLanguage } = this.state;
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                content={
                  <div>
                    <label className="profile-is-translator" onClick={this.handleTranslatorChange}>{this.state.isTranslator ? "I am a translator" : "I am a organizer"}</label>
                    <FormGroup controlId="email" className="col-md-6">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="email"
                        bsClass="form-control"
                        placeholder="Input email address."
                        style={{marginBottom: "20px"}}
                        defaultValue={email}
                        onChange={this.handleEmailChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="name" className="col-md-6">
                      <ControlLabel>Name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input your name."
                        style={{marginBottom: "20px"}}
                        defaultValue={userName}
                        onChange={this.handleNameChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="password" className="col-md-6">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="password"
                        bsClass="form-control"
                        placeholder="Password"
                        style={{marginBottom: "20px"}}
                        onChange={this.handlePasswordChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="confirm-password" className="col-md-6">
                      <ControlLabel>Confirm password</ControlLabel>
                      <FormControl
                        componentClass="input"
                        type="password"
                        bsClass="form-control"
                        placeholder="Password confirmation"
                        style={{marginBottom: "20px"}}
                        onChange={this.handleConfirmChange}
                      />
                      <p className="password-confirm-err-msg">{this.state.errMsg}</p>
                    </FormGroup>
                    <FormGroup controlId="company" className="col-md-12">
                      <ControlLabel>Company</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Company, organization or school"
                        style={{marginBottom: "20px"}}
                        defaultValue={company}
                        onChange={this.handleCompanyChange}
                      />
                    </FormGroup>
                    {!isTranslator &&
                      <FormGroup controlId="title" className="col-md-6">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                          componentClass="input"
                          bsClass="form-control"
                          placeholder="Input the titile."
                          style={{marginBottom: "20px"}}
                          defaultValue={title}
                          onChange={this.handleTitleChange}
                        />
                      </FormGroup>
                    }
                    {isTranslator &&
                      <FormGroup controlId="position" className="col-md-12">
                        <ControlLabel>Position</ControlLabel>
                        <FormControl
                          componentClass="input"
                          bsClass="form-control"
                          placeholder="Input your position."
                          style={{marginBottom: "20px"}}
                          defaultValue={userPosition}
                          onChange={this.handlePositionChange}
                        />
                      </FormGroup>
                    }
                    <FormGroup controlId="website" className={isTranslator ? "col-md-12" : "col-md-6"}>
                      <ControlLabel>Website</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input your website."
                        style={{marginBottom: "20px"}}
                        defaultValue={website}
                        onChange={this.handleWebsiteChange}
                      />
                    </FormGroup>
                    {isTranslator &&
                      <>
                        <FormGroup controlId="yourLanguage" className="col-md-12">
                          <ControlLabel>Language from</ControlLabel>
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Select your language."
                            defaultValue={yourLanguage}
                            onChange={this.handleYourLanguageChange}
                          >
                              {languages.map((language, idx) => {
                                return (
                                  <option key={idx}>{language.name}</option>
                                )
                              })}
                          </FormControl>
                        </FormGroup>
                        <FormGroup controlId="translationLanguage" className="col-md-12">
                          <ControlLabel>Language to</ControlLabel>
                          <Multiselect
                            id="translation_select"
                            options={languages}
                            selectedValues={selectedToLanguages}
                            onSelect={this.handleLanguageToSelect}
                            onRemove={this.handleLanguageToRemove}
                            closeIcon="cancel"
                            displayValue="name"
                          />
                        </FormGroup>
                        <FormGroup controlId="expertise" className="col-md-12">
                          <ControlLabel>What are your areas of expertise?</ControlLabel>
                          <Multiselect
                            id="expertise_select"
                            options={categories}
                            selectedValues={selectedExpertise}
                            onSelect={this.handleExpertiseSelect}
                            onRemove={this.handleExpertiseRemove}
                            closeIcon="cancel"
                            displayValue="name"
                          />
                        </FormGroup>
                        <FormGroup controlId="companies" className="col-md-12">
                          <ControlLabel>Companies you interpreted for</ControlLabel>
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={interpretedCompany}
                            onChange={this.handleInterpretedCompanyChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="mobile-number" className="col-md-12">
                          <ControlLabel>Domestic mobile number</ControlLabel>
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={mobileNumber}
                            onChange={this.handleMobileNumberChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="payer-id" className="col-md-6">
                          <ControlLabel>Paypal payer ID</ControlLabel>
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={payerID}
                            onChange={this.handlePayerIDChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="currency-code" className="col-md-6">
                          <ControlLabel>Currency Code</ControlLabel>
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={currencyCode}
                            onChange={this.handleCurrencyCodeChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="price-per-30min" className="col-md-6">
                          <ControlLabel>USD rate for 30 min translation</ControlLabel>
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={priceFor30min}
                            onChange={this.handle30MinsRateChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="price-per-30min" className="col-md-6">
                          <ControlLabel>USD rate for 1.5 hour translation</ControlLabel>
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            style={{marginBottom: "20px"}}
                            defaultValue={priceFor90min}
                            onChange={this.handle90MinsRateChange}
                          />
                        </FormGroup>
                        <FormGroup controlId="price-per-30min" className="col-md-12">
                          <ControlLabel>Time when you can't translate for us</ControlLabel>
                          {availableRecurrenceTimeList.map((day, dayIdx) => {
                            return (
                              <div key={dayIdx} style={{ paddingLeft: "5px" }}>
                                <Row style={{ paddingLeft: "15px" }}>
                                  {day.dayOfWeek}
                                </Row>
                                <div id={'day_' + dayIdx}>
                                  {day.timeList.length ?
                                    day.timeList.map((time, timeIdx) => {
                                      console.log(time.fromTimeStr, "++++++++++++++");
                                      return (
                                        <Row key={timeIdx}>
                                          <Col md={5} xs={4} className="available-time-group">
                                            <FormControl
                                              componentClass="select"
                                              bsClass="form-control"
                                              placeholder="Select your language."
                                              onChange={(e) => this.handleUpdatefrom(dayIdx, timeIdx, e)}
                                            >
                                              {Timelinelist.map((item, idx) => {
                                                return (
                                                  item.str === time.fromTimeStr 
                                                  ? <option key={idx} value={item.id} selected>{item.str}</option>
                                                  : <option key={idx} value={item.id}>{item.str}</option>
                                                );
                                              })}
                                            </FormControl>
                                          </Col>
                                          <Col md={5} xs={4}>
                                            <FormControl
                                              componentClass="select"
                                              bsClass="form-control"
                                              placeholder="Select your language."
                                              onChange={(e) => this.handleUpdateto(dayIdx, timeIdx, e)}
                                            >
                                              {Timelinelist.map((item, idx) => {
                                                return (
                                                  item.str === time.toTimeStr
                                                  ? <option key={idx} value={item.id} selected>{item.str}</option>
                                                  : <option key={idx} value={item.id}>{item.str}</option>
                                                );
                                              })}
                                            </FormControl>
                                          </Col>
                                          <Col style={{ marginBottom: "10px" }}>
                                            {day.timeList.length !== 0 &&
                                              <Button className="btn-available-time-add-delete no-padding"
                                                onClick={() => this.handleDelete(dayIdx, timeIdx)}>
                                                <img src={DeleteButtonImage} alt="Delete" />
                                              </Button>}
                                            {day.timeList.length - 1 === timeIdx &&
                                              <Button className="btn-available-time-add-delete no-padding"
                                                onClick={() => this.handleAdd(dayIdx)}>
                                                <img src={AddButtonImage} alt="Add" />
                                              </Button>}
                                          </Col>
                                        </Row>
                                      )})
                                    : <Row>
                                      <Col md={5} xs={4} className="available-time-group">
                                        <FormControl
                                          componentClass="select"
                                          disabled={true}
                                          bsClass="form-control"
                                          placeholder="Select your language."
                                          onChange={(e) => this.handleUpdatefrom(0, 0, e)}
                                        >
                                          {Timelinelist.map((item, idx) => {
                                            return (
                                              <option key={idx} >{item.str}</option>
                                            );
                                          })}
                                        </FormControl>
                                      </Col>
                                      <Col md={5} xs={4}>
                                        <FormControl
                                          componentClass="select"
                                          disabled={true}
                                          bsClass="form-control"
                                          placeholder="Select your language."
                                          onChange={(e) => this.handleUpdateto(0, 0, e)}
                                        >
                                          {Timelinelist.map((item, idx) => {
                                            return (
                                              <option key={idx} >{item.str}</option>
                                            );
                                          })}
                                        </FormControl>
                                      </Col>
                                      <Col style={{ marginBottom: "10px" }}>
                                        <Button className="btn-available-time-add-delete no-padding"
                                          onClick={() => this.handleAdd(dayIdx)}>
                                          <img src={AddButtonImage} alt="Add" />
                                        </Button>
                                      </Col>
                                    </Row>
                                  }
                                </div>
                              </div>
                            )
                          })}
                        </FormGroup>
                      </>
                    }
                    <Button bsStyle="info" pullRight fill onClick={this.handleProfileUpdate}>
                      Update Profile
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

export default Profile;
