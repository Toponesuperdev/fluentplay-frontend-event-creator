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
import mockup_data from "../mockup_data.json"

const session_list = mockup_data.sessions;
let select_list = [];

session_list.forEach(function(session) {
  select_list.push({name: session.title});
});

class CreateSponsor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sponsorName: "",
      companyWebsite: "",
      promotionMessage: "",
      promotionUrl: "",
      image: null
    }
  }

  handleNameChange(eve) {
    this.setState({sponsorName: eve.target.value});
  }

  handleCompanyWebsiteChange(eve) {
    this.setState({companyWebsite: eve.target.value});
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

  handleFileChange(eve) {
    this.setState({image: eve.target.files[0]});
  }

  handleCreate() {
    const { sponsorName, companyWebsite, marketingImage, promotionMessage, promotionUrl } = this.state;
    const data = new FormData();
    const sponsortData = JSON.stringify({
      sponsorName: sponsorName,
      companyWebsite: companyWebsite,
      marketingImage: marketingImage,
      promotionMessage: promotionMessage,
      promotionUrl: promotionUrl
    });

    data.append("file", this.state.image);
    data.append("sponsorInfo", sponsortData);

    createSponsor(data).then((response) => {
      this.props.history.push(`/sponsors/${response.data.sponsorId}`);
    });
  }

  render() {
    const { image } = this.state;
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
                      <div>
                        <label className="custom-file-upload">
                          <input type="file" onChange={(eve) => this.handleFileChange(eve)}/>
                          <i className="fa fa-cloud-upload" /> Browse
                        </label>
                      </div>
                      {image && <img className="event-image" src={URL.createObjectURL(image)} alt="Marketing"/>}
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
