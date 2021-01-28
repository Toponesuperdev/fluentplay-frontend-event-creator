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
import Button from "components/CustomButton/CustomButton.jsx";
import { getSponsorById, updateSponsor } from "../requests/sponsors.jsx"

let sponsor_param = {
  sponsorName: "",
  companyWebsite: "",
  marketingImage: "",
  promotionMessage: "",
  promotionUrl: "",
}

class Sponsors extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      editable: false,
      edited: false,
      saving: false,
      sponsorId: "",
      sponsorName: "",
      companyWebsite: "",
      marketingImage: "",
      promotionMessage: "",
      promotionUrl: "",
      temp_info: {
        sponsorId: "",
        sponsorName: "",
        companyWebsite: "",
        marketingImage: "",
        promotionMessage: "",
        promotionUrl: "",
      }
    }
  }

  getSponsorInfo() {
    let { temp_info } = this.state;
    temp_info.sponsorId = window.location.pathname.split('/')[2];
    this.setState({sponsorId: window.location.pathname.split('/')[2], temp_info});
    getSponsorById(window.location.pathname.split('/')[2]).then((response) => {
      if (response.status) {
        const { sponsorName, companyWebsite, marketingImage, promotionMessage, promotionUrl } = response.data;
        temp_info.sponsorName = sponsorName;
        temp_info.companyWebsite = companyWebsite;
        temp_info.marketingImage = marketingImage;
        temp_info.promotionMessage = promotionMessage;
        temp_info.promotionUrl = promotionUrl;
        
        this.setState({
          sponsorName: sponsorName,
          companyWebsite: companyWebsite,
          marketingImage: marketingImage,
          promotionMessage: promotionMessage,
          promotionUrl: promotionUrl,
        });
      }
    });
  }

  componentWillMount() {
    this.getSponsorInfo();
  }

  handleNameChange(eve) {
    let { temp_info } = this.state;
    temp_info.sponsorName = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleCompanyWebsiteChange(eve) {
    let { temp_info } = this.state;
    temp_info.companyWebsite = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handleMarketingImageChange(eve) {
    let { temp_info } = this.state;
    temp_info.marketingImage = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handlePromotionMessageChange(eve) {
    let { temp_info } = this.state;
    temp_info.promotionMessage = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  handlePromotionUrlChange(eve) {
    let { temp_info } = this.state;
    temp_info.promotionUrl = eve.target.value;

    this.setState({temp_info, edited: true});
  }

  toggleEdit() {
    this.setState({editable: !this.state.editable, saving: false, edited: false});
  }

  handleSave() {
    const { temp_info } = this.state;

    this.setState({saving: true});
    updateSponsor(temp_info).then((response) => {
      this.setState({
        editable: !this.state.editable,
        saving: false,
        sponsorName: temp_info.sponsorName,
        companyWebsite: temp_info.companyWebsite,
        marketingImage: temp_info.marketingImage,
        promotionMessage: temp_info.promotionMessage,
        promotionUrl: temp_info.promotionUrl,
      });
    });
  }

  render() {
    const { editable, sponsorName, companyWebsite, marketingImage, promotionMessage, promotionUrl, edited, saving } = this.state;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={editable ? "Edit sponsor": ""}
                content={
                  <div>
                    <FormGroup controlId="sponsorsponsorName">
                      <ControlLabel>Sponsor Name</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input sponsor's sponsorName."
                            defaultValue={sponsorName}
                            onChange={(eve) => this.handleNameChange(eve)}
                          />
                        : <h5 style={{padding: "8px"}}>{sponsorName}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="companyUrl">
                      <ControlLabel>Company website</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input Company website url."
                            defaultValue={companyWebsite}
                            onChange={(eve) => this.handleCompanyWebsiteChange(eve)}
                          />
                        : <h5 style={{padding: "8px"}}><a href={companyWebsite} >{companyWebsite}</a></h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="image">
                      <ControlLabel>Image (Marketing Image)</ControlLabel>
                      {editable 
                        ? 
                          <div className="custom-file">
                            <input id="inputGroupFile01" type="file" className="custom-file-input from-control" onChange={this.handleMarketingImageChange}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                          </div>
                        : <h5 style={{padding: "8px"}}>{marketingImage}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="promotionMesage">
                      <ControlLabel>Promotion Message</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Promotion Message"
                            defaultValue={promotionMessage}
                            onChange={(eve) => this.handlePromotionMessageChange(eve)}
                          />
                        : <h5 style={{padding: "8px"}}>{promotionMessage}</h5>
                      }
                    </FormGroup>
                    <FormGroup controlId="promotionUrl">
                      <ControlLabel>Promotion URL</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input the url for promotion."
                            defaultValue={promotionUrl}
                            onChange={(eve) => this.handlePromotionUrlChange(eve)}
                          />
                        : <h5 style={{padding: "8px"}}><a href={promotionUrl} >{promotionUrl}</a></h5>
                      }
                    </FormGroup>
                    {editable 
                      ? 
                        <>
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                            Cancel
                          </Button>
                          <Button disabled={!edited || saving} bsStyle="info" pullRight fill type="submit" onClick={() => this.handleSave()} style={{marginRight: "15px"}}>
                            {saving ? "Saving......" : "Save"}
                          </Button>
                        </>
                      :
                        <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                          Edit
                        </Button>
                    }
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

export default Sponsors;
