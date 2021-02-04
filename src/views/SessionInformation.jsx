import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { SessionCard } from "components/SessionCard/SessionCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { getSessions } from "../requests/sessions.jsx"

class SessionInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sessionList: []
    }
  }

  componentWillMount() {
    getSessions().then((response) => {
      this.setState({
        sessionList: response.data
      });
    })
  }

  render() {
    const { sessionList } = this.state
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
          {sessionList.map((session, idx) => {
            return (
              <Col md={3} key={idx}>
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
