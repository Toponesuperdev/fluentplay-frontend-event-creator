import React, { Component } from "react";

export class SessionCard extends Component {
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
                {this.props.title}
                <br />
                <small>{this.props.companyName}</small>
              </h4>
            </a>
          </div>
          <h5>Start from: {this.props.from}</h5>
          <div style={{height: '60px'}}>
            <h5 className="col-md-6" style={{height: "28px", paddingLeft: "0px", paddingRight: "0px"}}>Language: {this.props.language && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{this.props.language}</label>}</h5>
            <h5 className="col-md-6" style={{height: "28px", paddingLeft: "0px", paddingRight: "0px"}}>Translation Language: {this.props.tranlationLanguage && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{this.props.tranlationLanguage}</label>}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
