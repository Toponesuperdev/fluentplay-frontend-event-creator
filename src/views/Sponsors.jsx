import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { SponsorCard } from "components/SponsorCard/SponsorCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import mockup_data from "../mockup_data.json"

const mockup_sponsors  = mockup_data.sponsors;

class Sponsors extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Link to="/sponsors/new">
              <Button bsStyle="info" pullRight fill type="submit" style={{marginBottom: "15px", marginRight: "30px"}}>
                Create new sponsor
              </Button>
            </Link>
          </Row>
          {mockup_sponsors.map((sponsor, idx) => {
            return (
              <Col md={4} key={idx}>
                <SponsorCard
                  data={sponsor}
                />
              </Col>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Sponsors;
