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

class CreateEvent extends Component {

  onDatesChange = ({ startDate, endDate }) => {
    console.log(({ startDate, endDate }));
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create event"
                content={
                  <div>
                    <FormGroup controlId="eventName">
                      <ControlLabel>Name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input the envent name."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                      <ControlLabel>Description</ControlLabel>
                      <FormControl
                        rows="5"
                        componentClass="textarea"
                        bsClass="form-control"
                        placeholder="Description"
                        defaultValue=""
                      />
                    </FormGroup>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="category" className="col-md-5" style={{paddingLeft: "0px"}}>
                          <ControlLabel>Category</ControlLabel>
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Input the envent name."
                            defaultValue="">
                              <option>{"Art"}</option>
                              <option>{"Association"}</option>
                              <option>{"Auto & Air"}</option>
                              <option>{"Banking & Finance"}</option>
                              <option>{"Business"}</option>
                              <option>{"Charity"}</option>
                              <option>{"Climate & Environment"}</option>
                          </FormControl>
                        </FormGroup>
                        <FormGroup controlId="category" className="col-md-5" style={{paddingLeft: "0px"}}>
                          <ControlLabel>Fee</ControlLabel>
                          <FormControl
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Input the envent name."
                            defaultValue="">
                              <option>{"Absorb all fees"}</option>
                              <option>{"Pass on all fees"}</option>
                          </FormControl>
                        </FormGroup>
                        <FormGroup controlId="eventPrice" className="col-md-2" style={{paddingRight: "0px"}}>
                          <ControlLabel>Event Price</ControlLabel>
                          <FormControl
                            componentClass="input"
                            type="number"
                            bsClass="form-control"
                            placeholder="Event Price"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup controlId="image">
                      <ControlLabel>Image</ControlLabel>
                      <div className="custom-file">
                        <input id="inputGroupFile01" type="file" className="custom-file-input from-control" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                      </div>
                    </FormGroup>
                    <FormGroup controlId="timezoneList" className="col-md-6" style={{paddingLeft: "0px"}}>
                      <ControlLabel>Timezone</ControlLabel>
                      <FormControl
                        componentClass="select"
                        bsClass="form-control"
                        placeholder="Select timezone."
                        defaultValue="">
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
                    </FormGroup>
                    <FormGroup controlId="eventName" className="col-md-6" style={{paddingRight: "0px"}}>
                      <ControlLabel>From - To</ControlLabel>
                      <DateRangePicker
                        initialSettings={{ startDate: new Date() }}
                      >
                        <input type="text" value={""} className="form-control" onChange={this.onDatesChange}/>
                      </DateRangePicker>
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

export default CreateEvent;
