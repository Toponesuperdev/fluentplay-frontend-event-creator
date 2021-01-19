import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
            <Link to="/sponsers/new">
              <Button bsStyle="info" pullRight fill type="submit" style={{marginBottom: "15px", marginRight: "30px"}}>
                Create new sponser
              </Button>
            </Link>
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
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Sponsers;
