import React, { Component } from "react";
import { Link } from "react-router-dom"

export class SponsorCard extends Component {
  render() {
    const {data} = this.props;
    let sessions = "[" + JSON.stringify(data.sessions[0]);
    data.sessions.map((session, idx) => {
      if (idx) {
        sessions += "," + JSON.stringify(session);
      }
    });
    sessions += "]"
    const params = `/sponsors/${data.id}?name=${encodeURIComponent(data.name)}&company_website=${encodeURIComponent(data.company_website)}&marketing_image=${encodeURIComponent(data.marketing_image)}&promotion_message=${encodeURIComponent(data.promotion_message)}&promotion_url=${encodeURIComponent(data.promotion_url)}&sessions=${sessions}`

    return (
      <div className="card card-event">
        <div className="image">
          <img src={data.marketing_image} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={params}>
              <h4 className="title">
                {data.name}
                <br />
                <small>{data.company_website}</small>
              </h4>
            </Link>
          </div>
          <p className="description" style={{marginTop: "10px"}}>{data.promotion_message}</p>
        </div>
      </div>
    );
  }
}

export default SponsorCard;
