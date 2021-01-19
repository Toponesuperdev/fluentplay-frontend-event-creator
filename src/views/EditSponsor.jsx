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

let sponsor_param = {
  name: "",
  company_website: "",
  marketing_image: "",
  promotion_message: "",
  promotion_url: ""
}

class Sponsors extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      editable: false
    }
  }

  handleNameChange(eve) {
    sponsor_param.name = eve.target.value
  }

  handleCompanyWebsiteChange(eve) {
    sponsor_param.company_website = eve.target.value
  }

  handleMarketingImageChange(eve) {
    sponsor_param.marketing_image = eve.target.value
  }

  handlePromotionMessageChange(eve) {
    sponsor_param.promotion_message = eve.target.value
  }

  handlePromotionUrlChange(eve) {
    sponsor_param.promotion_url = eve.target.value
  }

  toggleEdit() {
    console.log(sponsor_param);
    this.setState({editable: !this.state.editable});
  }

  render() {
    const { editable } = this.state;
    const urlParams = new URLSearchParams(window.location.search);
    const sponsor_info = {
      name: urlParams.get("name"),
      company_website: urlParams.get("company_website"),
      marketing_image: urlParams.get("marketing_image"),
      promotion_message: urlParams.get("promotion_message"),
      promotion_url: urlParams.get("promotion_url"),
    }
    sponsor_param = sponsor_info;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={editable ? "Edit sponsor": ""}
                content={
                  <div>
                    <FormGroup controlId="sponsorName">
                      <ControlLabel>Sponsor name</ControlLabel>
                      {editable 
                        ? 
                          <FormControl
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Input sponsor's name."
                            defaultValue={sponsor_info.name}
                            onChange={this.handleNameChange}
                          />
                        : <h5 style={{padding: "8px"}}>{sponsor_info.name}</h5>
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
                            defaultValue={sponsor_info.company_website}
                            onChange={this.handleCompanyWebsiteChange}
                          />
                        : <h5 style={{padding: "8px"}}><a href={sponsor_info.company_website} >{sponsor_info.company_website}</a></h5>
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
                        : <h5 style={{padding: "8px"}}>{sponsor_info.marketing_image}</h5>
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
                            defaultValue={sponsor_info.promotion_message}
                            onChange={this.handlePromotionMessageChange}
                          />
                        : <h5 style={{padding: "8px"}}>{sponsor_info.promotion_message}</h5>
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
                            defaultValue={sponsor_info.promotion_url}
                            onChange={this.handlePromotionUrlChange}
                          />
                        : <h5 style={{padding: "8px"}}><a href={sponsor_info.promotion_url} >{sponsor_info.promotion_url}</a></h5>
                      }
                    </FormGroup>
                    {editable 
                      ? 
                        <>
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()}>
                            Cancel
                          </Button>
                          <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.toggleEdit()} style={{marginRight: "15px"}}>
                            Save
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
