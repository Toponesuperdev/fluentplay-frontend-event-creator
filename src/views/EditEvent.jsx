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
import { getEventById, updateEvent } from "../requests/events.jsx"
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from "moment"

class EventInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      edited: false,
      saving: false,
      eventId: "",
      eventName: "",
      description: "",
      category: "",
      imagePath: "",
      timezone: "",
      startTime: "",
      endTime: "",
      eventPrice: "",
      feeType: "",
      temp_info: {
        eventId: "",
        eventName: "",
        description: "",
        category: "",
        imagePath: "",
        time_zone: "",
        startTime: "",
        endTime: "",
        eventPrice: "",
        feeType: "",
      }
    }
  }

  getEventInfo() {
    let { temp_info } = this.state;
    temp_info.eventId = window.location.pathname.split('/')[2];
    this.setState({eventId: window.location.pathname.split('/')[2], temp_info});
    getEventById(window.location.pathname.split('/')[2]).then((response) => {
      if (response.status) {
        const { eventName, description, category, imagePath, time_zone, startTime, endTime, eventPrice, feeType } = response.data;
        temp_info.eventName = eventName;
        temp_info.description = description;
        temp_info.category = category;
        temp_info.imagePath = imagePath;
        temp_info.time_zone = time_zone;
        temp_info.startTime = startTime;
        temp_info.endTime = endTime;
        temp_info.eventPrice = eventPrice;
        temp_info.feeType = feeType;
        
        this.setState({
          eventName: eventName,
          description: description,
          category: category,
          imagePath: imagePath,
          timezone: time_zone,
          startTime: startTime,
          endTime: endTime,
          eventPrice: eventPrice,
          feeType: feeType,
          temp_info
        });
      }
    });
  }

  componentWillMount() {
    this.getEventInfo();
  }

  onDatesChange = (start, end) => {
    let { temp_info } = this.state;
    temp_info.startTime = moment(start).format("YYYY-MM-DD");
    temp_info.endTime = moment(end).format("YYYY-MM-DD");

    this.setState({temp_info, edited: true});
  }

  handleNameChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.eventName = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleDescriptionChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.description = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleCategoryChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.category = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleImageChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.imagePath = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handletimezoneChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.time_zone = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleEventPriceChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.eventPrice = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleFeeTypeChange = (eve) => {
    let { temp_info } = this.state;
    temp_info.feeType = eve.target.value;

    this.setState({temp_info, edited: true});
  }
  
  toggleEdit() {
    this.setState({editable: !this.state.editable, saving: false, edited: false});
  }

  handleSave() {
    const { temp_info } = this.state;

    this.setState({saving: true});
    updateEvent(temp_info).then((response) => {
      console.log(response.data);
      this.setState({
        editable: !this.state.editable,
        saving: false,
        eventName: temp_info.eventName,
        description: temp_info.description,
        category: temp_info.category,
        imagePath: temp_info.imagePath,
        timezone: temp_info.time_zone,
        startTime: temp_info.startTime,
        endTime: temp_info.endTime,
        eventPrice: temp_info.eventPrice,
        feeType: temp_info.feeType
      });
    });
  }

  render() {
    const { eventName, description, category, imagePath, timezone, startTime, endTime, eventPrice, feeType, editable, edited, saving } = this.state;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={editable ? "Edit event": ""}
                content={
                  <div>
                    <FormGroup controlId="eventName">
                      <ControlLabel>Name</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input the envent name."
                            defaultValue={eventName}
                            onChange={this.handleNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{eventName}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                      <ControlLabel>Description</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Description"
                            defaultValue={description}
                            onChange={this.handleDescriptionChange}
                          />
                        : <h5 style={{padding: "8px"}}>{description}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="category" className="col-md-5" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Category</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={category}
                            onChange={this.handleCategoryChange}
                          >
                              <option>{"Art"}</option>
                              <option>{"Association"}</option>
                              <option>{"Auto & Air"}</option>
                              <option>{"Banking & Finance"}</option>
                              <option>{"Business"}</option>
                              <option>{"Charity"}</option>
                              <option>{"Climate & Environment"}</option>
                          </FormControl>
                        : <h5 style={{padding: "8px"}}>{category}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="category" className="col-md-5" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Fee</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Input the envent name."
                            defaultValue={feeType}
                            onChange={this.handleFeeTypeChange}
                          >
                              <option>{"Absorb all fees"}</option>
                              <option>{"Pass on all fees"}</option>
                          </FormControl>
                        :
                          <h5 style={{padding: "8px"}}>{feeType}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventPrice" className="col-md-2" style={{paddingRight: "0px"}}>
                      <ControlLabel>Event Price</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            placeholder="Event Price"
                            defaultValue={eventPrice}
                            onChange={this.handleEventPriceChange}
                          />
                        : <h5 style={{padding: "8px"}}>{eventPrice}$</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="image">
                      <ControlLabel>Image</ControlLabel>
                      {editable 
                        ? 
                          <div className="custom-file">
                            <input id="inputGroupFile01" type="file" className="custom-file-input from-control" onChange={this.handleImageChange}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                          </div>
                        : <h5 style={{padding: "8px"}}>{imagePath}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="timezoneList" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Timezone</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                          componentClass="select"
                          bsClass="form-control"
                          defaultValue={timezone}
                          onChange={this.handletimezoneChange}
                        >
                            <option>(GMT -12:00) Eniwetok, Kwajalein</option>
                            <option>(GMT -11:00) Midway Island, Samoa</option>
                            <option>(GMT -10:00) Hawaii</option>
                            <option>(GMT -9:00) Alaska</option>
                            <option>(GMT -8:00) Pacific Time (US & Canada)</option>
                            <option>(GMT -7:00) Mountain Time (US & Canada)</option>
                            <option>(GMT -6:00) Central Time (US & Canada), Mexico City</option>
                            <option>(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima</option>
                            <option>(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                            <option>(GMT -3:30) Newfoundland</option>
                            <option>(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                            <option>(GMT -2:00) Mid-Atlantic</option>
                            <option>(GMT -1:00) Azores, Cape Verde Islands</option>
                            <option>(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                            <option>(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option>(GMT +2:00) Kaliningrad, South Africa</option>
                            <option>(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                            <option>(GMT +3:30) Tehran</option>
                            <option>(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                            <option>(GMT +4:30) Kabul</option>
                            <option>(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                            <option>(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                            <option>(GMT +5:45) Kathmandu</option>
                            <option>(GMT +6:00) Almaty, Dhaka, Colombo</option>
                            <option>(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                            <option>(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                            <option>(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                            <option>(GMT +9:30) Adelaide, Darwin</option>
                            <option>(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                            <option>(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                            <option>(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                         </FormControl>
                        : <h5 style={{padding: "8px"}}>{timezone}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>From - To</ControlLabel>
                      {editable 
                        ? 
                          <DateRangePicker
                            initialSettings={{ startDate: moment(startTime), endDate: moment(endTime) }}
                            onCallback={(start, end, label) => this.onDatesChange(start, end, label)}
                          >
                            <input type="text" value={`${startTime} - ${endTime}`} className="form-control" onChange={this.onDatesChange}/>
                          </DateRangePicker>
                        : <h5 style={{padding: "8px"}}>{`${moment(startTime).format("MM/DD/YYYY")} - ${moment(endTime).format("MM/DD/YYYY")}`}</h5>
                      }
                    </FormGroup>
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

export default EventInformation;
