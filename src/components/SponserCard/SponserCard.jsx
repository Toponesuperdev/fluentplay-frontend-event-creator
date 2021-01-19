import React, { Component } from "react";

export class SponserCard extends Component {
  render() {
    return (
      <div className="card card-event">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <a href="#pablo">
              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.companyUrl}</small>
              </h4>
            </a>
          </div>
          <p className="description text-center">{this.props.promotionMessage}</p>
        </div>
      </div>
    );
  }
}

export default SponserCard;
