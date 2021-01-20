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
import { Multiselect } from 'multiselect-react-dropdown';
import mockup_data from "../mockup_data.json"

const session_list = mockup_data.sessions;
let select_list = [];

session_list.map((session) => {
  select_list.push({name: session.title})
})

class CreateSponsor extends Component {

  constructor(props) {
    super(props);

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
                title="Create sponsor"
                content={
                  <div>
                    <FormGroup controlId="sponsorName">
                      <ControlLabel>Sponsor name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input sponsor's name."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="companyUrl">
                      <ControlLabel>Company website</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input Company website url."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="image">
                      <ControlLabel>Image (Marketing Image)</ControlLabel>
                      <div className="custom-file">
                        <input id="inputGroupFile01" type="file" className="custom-file-input from-control" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                      </div>
                    </FormGroup>
                    <FormGroup controlId="promotionMesage">
                      <ControlLabel>Promotion Message</ControlLabel>
                      <FormControl
                        rows="5"
                        componentClass="textarea"
                        bsClass="form-control"
                        placeholder="Promotion Message"
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="promotionUrl">
                      <ControlLabel>Promotion URL</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input the url for promotion."
                        defaultValue=""
                      />
                    </FormGroup>
                    <FormGroup controlId="promotionUrl">
                      <ControlLabel>Sessions</ControlLabel>
                      <Multiselect
                        options={session_list}
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

export default CreateSponsor;
