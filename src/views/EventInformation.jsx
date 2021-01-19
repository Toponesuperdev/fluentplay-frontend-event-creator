import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { EventCard } from "components/EventCard/EventCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import mockup_data from "../mockup_data.json"

const mockup_events = mockup_data.events;

class EventInformation extends Component {
  constructor(props) {
    super(props);

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
          {mockup_events.map((event, idx) => {
            return (
              <Col md={4} key={idx}>
                <EventCard
                  data={event}
                />
              </Col>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default EventInformation;
