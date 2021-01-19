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
