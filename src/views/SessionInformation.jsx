import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { SessionCard } from "components/SessionCard/SessionCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import mockup_data from "../mockup_data.json"

const mockup_sessions  = mockup_data.sessions;

class SessionInformation extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Link to="/sessions/new">
              <Button bsStyle="info" pullRight fill type="submit" style={{marginBottom: "15px", marginRight: "30px"}}>
                Create new session
              </Button>
            </Link>
          </Row>
          {mockup_sessions.map((session, idx) => {
            return (
              <Col md={4} key={idx}>
                <SessionCard
                  data={session}
                />
              </Col>
            ); 
          })}
        </Grid>
      </div>
    );
  }
}

export default SessionInformation;
