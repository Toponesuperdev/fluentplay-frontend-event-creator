import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { SessionCard } from "components/SessionCard/SessionCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class SessionInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
    }

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
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
          <Col md={4}>
            <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 1"
              companyName="Microsoft LLC"
              language="English"
              tranlationLanguage="French"
              from={"2021-02-23"}
              category={"Banking & Finance"}
            />
          </Col>
          <Col md={4}>
            <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 1"
              companyName="Amazon LLC"
              language="Germany"
              tranlationLanguage="Japanese"
              from={"2021-02-23"}
              category={"Banking & Finance"}
            />
          </Col>
          <Col md={4}>
            <SessionCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              title="Session Title 3"
              companyName="Google LLC"
              language="English"
              tranlationLanguage="Italian"
              from={"2021-02-23"}
              category={"Banking & Finance"}
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default SessionInformation;
