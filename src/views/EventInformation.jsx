import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { EventCard } from "components/EventCard/EventCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class EventInformation extends Component {

  onDatesChange = ({ startDate, endDate }) => {
    console.log(({ startDate, endDate }));
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Link to="/events/new">
              <Button bsStyle="info" pullRight fill type="submit" style={{marginBottom: "15px", marginRight: "30px"}}>
                Create new event
              </Button>
            </Link>
          </Row>
          <Col md={4}>
            <EventCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Event 1"
              userName="Javier Mata"
              price={20}
              from={"2021-02-23"}
              category={"Banking & Finance"}
              description={
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
            <EventCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Event 2"
              userName="Javier Mata"
              price={70}
              from={"2021-02-23"}
              category={"Business"}
              description={
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
            <EventCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              name="Event 3"
              userName="Javier Mata"
              price={50}
              from={"2021-02-23"}
              category={"Climate & Environment"}
              description={
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

export default EventInformation;
