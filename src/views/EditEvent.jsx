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
import Button from "components/CustomButton/CustomButton.jsx";

import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from "moment"

let event_param = {
  name: "",
  description: "",
  category: "",
  image_path: "",
  timezone: "",
  start_time: "",
  end_time: "",
  event_price: "",
  translation_price: ""
}

class EventInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }
  }

  onDatesChange (event, picker) {
    event_param.start_time = picker.startDate.toString();
    event_param.end_time = picker.endDate.toString();
  }

  handleNameChange(eve) {
    event_param.name = eve.target.value;
  }

  handleDescriptionChange(eve) {
    event_param.description = eve.target.value;
  }

  handleCategoryChange(eve) {
    event_param.category = eve.target.value;
  }

  handleImageChange(eve) {
    event_param.image_path = eve.target.value;
  }

  handletimezoneChange(eve) {
    event_param.timezone = eve.target.value;
  }

  handleEventPriceChange(eve) {
    event_param.event_price = eve.target.value;
  }
  
  handleTranslationPriceChange(eve) {
    event_param.translation_price = eve.target.value;
  }

  toggleEdit() {
    console.log(event_param);
    this.setState({editable: !this.state.editable});
  }

  render() {
    const { editable } = this.state;
    const urlParams = new URLSearchParams(window.location.search);
    const event_info = {
      name: urlParams.get("name"),
      description: urlParams.get("description"),
      category: urlParams.get("category"),
      image_path: urlParams.get("image_path"),
      timezone: urlParams.get("timezone"),
      start_time: urlParams.get("start_time"),
      end_time: urlParams.get("end_time"),
      event_price: urlParams.get("event_price"),
      translation_price: urlParams.get("translation_price")
    }
    event_param = event_info;

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
                            defaultValue={event_info.name}
                            onChange={this.handleNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{event_info.name}</h5>
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
                            defaultValue={event_info.description}
                            onChange={this.handleDescriptionChange}
                          />
                        : <h5 style={{padding: "8px"}}>{event_info.description}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="category">
                      <ControlLabel>Category</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            defaultValue={event_info.category}
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
                        : <h5 style={{padding: "8px"}}>{event_info.category}</h5>
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
                        : <h5 style={{padding: "8px"}}>{event_info.image_path}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="timezoneList" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Timezone</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                          componentClass="select"
                          bsClass="form-control"
                          defaultValue={event_info.timezone}
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
                        : <h5 style={{padding: "8px"}}>{event_info.timezone}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>From - To</ControlLabel>
                      {editable 
                        ? 
                          <DateRangePicker
                            initialSettings={{ startDate: moment(event_info.start_time), endDate: moment(event_info.end_time) }}
                            onEvent={this.onDatesChange}
                          >
                            <input type="text" value={`${event_info.start_time} - ${event_info.end_time}`} className="form-control" onChange={this.onDatesChange}/>
                          </DateRangePicker>
                        : <h5 style={{padding: "8px"}}>{`${moment(event_info.start_time).format("MM/DD/YYYY")} - ${moment(event_info.end_time).format("MM/DD/YYYY")}`}</h5>
                      }
                    </FormGroup>
                    
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="eventPrice" className="col-md-6" style={{paddingLeft: "0px"}}>
                          <ControlLabel>Event Price</ControlLabel>
                          {editable 
                            ? 
                              <FormControl
                                componentClass="input"
                                type="number"
                                bsClass="form-control"
                                placeholder="Event Price"
                                defaultValue={event_info.event_price}
                                onChange={this.handleEventPriceChange}
                              />
                            : <h5 style={{padding: "8px"}}>{event_info.event_price}$</h5>
                          }
                        </FormGroup>
                        <FormGroup controlId="translationPrice" className="col-md-6" style={{paddingRight: "0px"}}>
                          <ControlLabel>Translation Price</ControlLabel>
                          {editable 
                            ? 
                              <FormControl
                                componentClass="input"
                                type="number"
                                bsClass="form-control"
                                placeholder="Translation Price"
                                defaultValue={event_info.translation_price}
                                onChange={this.handleTranslationPriceChange}
                              />
                            : <h5 style={{padding: "8px"}}>{event_info.translation_price}$</h5>
                          }
                        </FormGroup>
                      </Col>
                    </Row>
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

export default EventInformation;
