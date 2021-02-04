import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { SponsorCard } from "components/SponsorCard/SponsorCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { getSponsors } from "../requests/sponsors.jsx"

class Sponsors extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sponsorList: []
    }
  }

  componentWillMount() {
    getSponsors().then((response) => {
      this.setState({
        sponsorList: response.data
      });
    })
  }

  render() {
    const { sponsorList } = this.state;
    
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
          {sponsorList.map((sponsor, idx) => {
            return (
              <Col md={3} key={idx}>
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
