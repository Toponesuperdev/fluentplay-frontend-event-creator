import React, { Component } from "react";

export class SponserCard extends Component {
  render() {
    const {data} = this.props;
    const params = ""

    return (
      <div className="card card-event">
        <div className="image">
          <img src={data.marketing_image} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <a href="#pablo">
              <h4 className="title">
                {data.name}
                <br />
                <small>{data.company_website}</small>
              </h4>
            </a>
          </div>
          <p className="description" style={{marginTop: "10px"}}>{data.promotion_message}</p>
        </div>
      </div>
    );
  }
}

export default SponserCard;
