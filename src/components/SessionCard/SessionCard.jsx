import React, { Component } from "react";
import { Link } from "react-router-dom"
import moment from "moment"

export class SessionCard extends Component {
  render() {
    const {data} = this.props;
    let files = "[" + JSON.stringify(data.files[0]);
    data.files.map((file, idx) => {
      if (idx) {
        files += "," + JSON.stringify(file);
      }
    });
    files += "]"
    
    let translation_languages = "[" + JSON.stringify(data.translation_languages[0]);
    data.translation_languages.map((translation_language, idx) => {
      if (idx) {
        translation_languages += "," +  JSON.stringify(translation_language);
      }
    });
    translation_languages += "]"

    const event = JSON.stringify(data.event);

    const params = `/sessions/${data.id}?name=${encodeURIComponent(data.name)}&title=${encodeURIComponent(data.title)}&company_name=${encodeURIComponent(data.company_name)}&your_language=${encodeURIComponent(data.your_language)}&translation_languages=${encodeURIComponent(translation_languages)}&translation_price=${data.translation_price}&start_time=${encodeURIComponent(data.start_time)}&files=${encodeURIComponent(files)}&event=${event}`;

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
            <h4 style={{marginLeft: "auto"}}>{data.event.name}</h4>
          </div>
          <h5>Start from: {moment(data.start_time).format("MM/DD/YYYY")}</h5>
          <div style={{height: '90px'}}>
            <h5 className="col-md-12" style={{height: "15px", paddingLeft: "0px", paddingRight: "0px"}}>Language: {data.your_language && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.your_language}</label>}</h5>
            <h5 className="col-md-12" style={{height: "15px", paddingLeft: "0px", paddingRight: "0px"}}>Translation Language: {data.translation_language && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.translation_language}</label>}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
