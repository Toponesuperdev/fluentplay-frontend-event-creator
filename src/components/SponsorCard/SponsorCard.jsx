import React, { Component } from "react";
import { Link } from "react-router-dom"

export class SponsorCard extends Component {
  render() {
    const {data} = this.props;
    const redirectUrls = `/sponsors/${data.sponsorId}`

    return (
      <div className="card custom-card">
        <div className="image">
          <Link to={redirectUrls}>
            <img src={data.marketingImage} alt="..." />
          </Link>
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={redirectUrls}>
              <h4 className="title">
                {data.sponsorName}
                <br />
                <small>{data.companyWebsite}</small>
              </h4>
            </Link>
          </div>
          <p className="description" style={{marginTop: "10px"}}>{data.promotionMessage}</p>
        </div>
      </div>
    );
  }
}

export default SponsorCard;
