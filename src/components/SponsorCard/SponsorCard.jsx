import React, { Component } from "react";
import { Link } from "react-router-dom"

export class SponsorCard extends Component {
  render() {
    const {data} = this.props;
    const params = `/sponsors/${data.sponsorId}`

    return (
      <div className="card card-event">
        <div className="image">
          <img src={data.marketingImage} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={params}>
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
