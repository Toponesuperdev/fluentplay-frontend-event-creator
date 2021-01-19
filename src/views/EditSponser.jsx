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
import { SponserCard } from "components/SponserCard/SponserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class Sponsers extends Component {

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
                title="Create sponser"
                content={
                  <div>
                    <FormGroup controlId="sponserName">
                      <ControlLabel>Sponser name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input sponser's name."
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
          <Col md={4}>
            <SponserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Sponser 1"
              companyUrl="www.google.com"
              promotionMessage={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  {/* <Button bsStyle="info" pullRight fill type="submit"> */}
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
          <Col md={4}>
          <SponserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Sponser 1"
              companyUrl="www.google.com"
              promotionMessage={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
          <Col md={4}>
          <SponserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Sponser 1"
              companyUrl="www.google.com"
              promotionMessage={
                <span>
                  Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo
                </span>
              }
              socials={
                <div>
                  <Button bsStyle="info" fill style={{margin: "10px 10px"}}>
                    Edit
                  </Button>
                  <Button bsStyle="danger" fill style={{margin: "10px 10px"}}>
                    Delete
                  </Button>
                </div>
              }
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Sponsers;
