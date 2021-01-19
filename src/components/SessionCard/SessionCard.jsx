import React, { Component } from "react";
import { Link } from "react-router-dom"
import moment from "moment"

export class SessionCard extends Component {
  render() {
    const {data} = this.props;
    const params = `/sessions/${data.id}?name=${encodeURIComponent(data.name)}&title=${encodeURIComponent(data.title)}&company_name=${encodeURIComponent(data.company_name)}&your_language=${encodeURIComponent(data.your_language)}&translation_language=${encodeURIComponent(data.translation_language)}&start_time=${encodeURIComponent(data.start_time)}`;
    console.log(JSON.stringify(data.files[0]));

    return (
      <div className="card card-event">
        <div className="image">
          <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={params}>
              <h4 className="title">
                {data.title}
                <br />
                <small>{data.company_name}</small>
              </h4>
            </Link>
          </div>
          <h5>Start from: {moment(data.start_time).format("MM/DD/YYYY")}</h5>
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
