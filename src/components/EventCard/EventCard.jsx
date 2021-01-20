import React, { Component } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';

export class EventCard extends Component {
  render() {
    const {data} = this.props;
    const params = `/events/${data.id}?name=${encodeURIComponent(data.name)}&description=${encodeURIComponent(data.description)}&category=${encodeURIComponent(data.category)}&image_path=${encodeURIComponent(data.image_path)}&timezone=${encodeURIComponent(data.timezone)}&start_time=${encodeURIComponent(data.start_time)}&end_time=${encodeURIComponent(data.end_time)}&event_price=${encodeURIComponent(data.event_price)}&translation_price=${encodeURIComponent(data.translation_price)}`

    return (
      <div className="card card-event">
        <div className="image">
          <img src={data.image_path} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={params}>
              <h4 className="title">
                {data.name}
                <br />
                <small>Start from: {moment(data.start_time).format("MM/DD/YYYY")}</small>
              </h4>
            </Link>
            {data.translation_price && <h4 style={{marginLeft: "auto"}}>{data.translation_price}$</h4>}
          </div>
          <h5 style={{height: "28px"}}>Category: {data.category && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px", margin: "0px"}}>{data.category}</label>}</h5>
          <p className="description">{data.description}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
