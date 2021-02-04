import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { EventCard } from "components/EventCard/EventCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { getEvents } from "../requests/events.jsx"

class EventInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: []
    }
  }

  componentWillMount() {
    getEvents().then((response) => {
      this.setState({
        eventList: response.data
      });
    })
  }
  
  render() {
    const { eventList } = this.state;
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
          <Row>
          {eventList.map((event, idx) => {
            return (
              <Col md={3} key={idx}>
                <EventCard
                  data={event}
                />
              </Col>
            );
          })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EventInformation;
