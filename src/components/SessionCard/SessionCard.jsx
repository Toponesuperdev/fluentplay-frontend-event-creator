import React, { Component } from "react";

export class SessionCard extends Component {
  render() {
    const {data} = this.props;
    const param = ""

    return (
      <div className="card card-event">
        <div className="image">
          <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <a href="#pablo">
              <h4 className="title">
                {data.title}
                <br />
                <small>{data.company_name}</small>
              </h4>
            </a>
          </div>
          <h5>Start from: {data.start_time}</h5>
          <div style={{height: '60px'}}>
            <h5 className="col-md-6" style={{height: "28px", paddingLeft: "0px", paddingRight: "0px"}}>Language: {data.your_language && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.your_language}</label>}</h5>
            <h5 className="col-md-6" style={{height: "28px", paddingLeft: "0px", paddingRight: "0px"}}>Translation Language: {data.translation_language && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.translation_language}</label>}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
