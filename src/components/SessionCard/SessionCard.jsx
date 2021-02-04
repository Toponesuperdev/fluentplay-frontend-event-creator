import React, { Component } from "react";
import { Link } from "react-router-dom"
import moment from "moment"

export class SessionCard extends Component {
  render() {
    const {data} = this.props;
    const redirectUrls = `/sessions/${data.sessionId}`

    return (
      <div className="card custom-card">
        <div className="image">
          <Link to={redirectUrls}>
            <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
          </Link>
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={redirectUrls}>
              <h4 className="title">
                {data.sessionTitle}
                <br />
                <small>{data.companyName}</small>
              </h4>
            </Link>
            <h4 style={{marginLeft: "auto"}}>{data.event.name}</h4>
          </div>
          <h5>Start from: {moment(data.startTime).format("MM/DD/YYYY")}</h5>
          <div style={{height: '90px'}}>
            <h5 className="col-md-12" style={{height: "15px", paddingLeft: "0px", paddingRight: "0px"}}>Language: {data.yourLanguage && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.yourLanguage}</label>}</h5>
            <h5 className="col-md-12" style={{height: "15px", paddingLeft: "0px", paddingRight: "0px"}}>
              Translation Language: 
              {data.translationLanguages.map((language, idx) =>{
                return (
                  <label key={idx} style={{background: "#04B5FA",color: "white", padding: "5px", borderRadius: "8px", margin: "2px 5px"}}>{language}</label>
                )
              })}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
