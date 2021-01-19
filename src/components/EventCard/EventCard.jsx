import React, { Component } from "react";

export class EventCard extends Component {
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
                <small>{this.props.userName}</small>
              </h4>
            </a>
            {this.props.price && <h4 style={{marginLeft: "auto"}}>{this.props.price}$</h4>}
          </div>
          <h5>Start from: {this.props.from}</h5>
          <h5 style={{height: "28px"}}>Category: {this.props.price && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{this.props.category}</label>}</h5>
          <p className="description text-center">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
