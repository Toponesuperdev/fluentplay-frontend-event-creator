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
      image: null,
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

  handleFileChange(eve) {
    this.setState({image: eve.target.files[0], edited: true});
  }

  handleSave() {
    let { temp_info } = this.state;

    let data = new FormData();
    data.append("file", this.state.image);
    data.append("sponsorInfo", JSON.stringify(temp_info));

    this.setState({saving: true});
    updateSponsor(data).then((response) => {
      temp_info.sponsorName = response.data.sponsorName;
      temp_info.companyWebsite = response.data.companyWebsite;
      temp_info.marketingImage = response.data.marketingImage;
      temp_info.promotionMessage = response.data.promotionMessage;
      temp_info.promotionUrl = response.data.promotionUrl;

      this.setState({
        editable: !this.state.editable,
        saving: false,
        sponsorName: response.data.sponsorName,
        companyWebsite: response.data.companyWebsite,
        marketingImage: response.data.marketingImage,
        promotionMessage: response.data.promotionMessage,
        promotionUrl: response.data.promotionUrl,
        temp_info
      });
      this.props.handleClick("tr", "success", `The sponsor ${response.data.sponsorName} is updated successfully.`);
    });
  }

  render() {
    const { editable, sponsorName, companyWebsite, marketingImage, promotionMessage, promotionUrl, edited, saving, image } = this.state;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={editable ? "Edit sponsor": ""}
                content={
                  <div>
                    <div className="col-md-12">
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
                    </div>
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
                          <>
                            <div>
                              <label className="custom-file-upload">
                                <input type="file" onChange={(eve) => this.handleFileChange(eve)}/>
                                <i className="fa fa-cloud-upload" /> Browse
                              </label>
                            </div>
                            {image ? <img src={URL.createObjectURL(image)} alt={sponsorName} className="event-image" /> : <img src={marketingImage} alt={sponsorName} className="event-image" />}
                          </>
                        : <div> <img src={marketingImage} className="event-image" alt={sponsorName} /> </div>
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
