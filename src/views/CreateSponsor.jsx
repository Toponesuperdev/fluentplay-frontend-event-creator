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
import { createSponsor } from "../requests/sponsors.jsx"
import Button from "components/CustomButton/CustomButton.jsx";
import { Multiselect } from 'multiselect-react-dropdown';
import mockup_data from "../mockup_data.json"

const session_list = mockup_data.sessions;
let select_list = [];

session_list.map((session) => {
  select_list.push({name: session.title})
})

class CreateSponsor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sponsorName: "",
      companyWebsite: "",
      marketingImage: "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400",
      promotionMessage: "",
      promotionUrl: ""
    }
  }

  handleNameChange(eve) {
    this.setState({sponsorName: eve.target.value});
  }

  handleCompanyWebsiteChange(eve) {
    this.setState({companyWebsite: eve.target.value});
  }

  handleMarketingImageChange(eve) {
    this.setState({marketingImage: eve.target.value});
  }

  handlePromotionMessageChange(eve) {
    this.setState({promotionMessage: eve.target.value});
  }

  handlePromotionUrlChange(eve) {
    this.setState({promotionUrl: eve.target.value});
  }

  toggleEdit() {
    this.setState({editable: !this.state.editable, saving: false, edited: false});
  }

  handleCreate() {
    const { sponsorName, companyWebsite, marketingImage, promotionMessage, promotionUrl } = this.state;

    createSponsor({
      sponsorName: sponsorName,
      companyWebsite: companyWebsite,
      marketingImage: marketingImage,
      promotionMessage: promotionMessage,
      promotionUrl: promotionUrl
    }).then((response) => {
      console.log(response);
      window.location.href = `/sponsors/${response.data.sponsorId}`
    });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create sponsor"
                content={
                  <div>
                    <FormGroup controlId="sponsorName">
                      <ControlLabel>Sponsor name</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input sponsor's name."
                        defaultValue=""
                        onChange={(eve) => this.handleNameChange(eve)}
                      />
                    </FormGroup>
                    <FormGroup controlId="companyUrl">
                      <ControlLabel>Company website</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input Company website url."
                        defaultValue=""
                        onChange={(eve) => this.handleCompanyWebsiteChange(eve)}
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
                        onChange={(eve) => this.handlePromotionMessageChange(eve)}
                      />
                    </FormGroup>
                    <FormGroup controlId="promotionUrl">
                      <ControlLabel>Promotion URL</ControlLabel>
                      <FormControl
                        componentClass="input"
                        bsClass="form-control"
                        placeholder="Input the url for promotion."
                        defaultValue=""
                        onChange={(eve) => this.handlePromotionUrlChange(eve)}
                      />
                    </FormGroup>
                    
                    <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.handleCreate()}>
                      Create
                    </Button>
                    <div className="clearfix" />
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CreateSponsor;
