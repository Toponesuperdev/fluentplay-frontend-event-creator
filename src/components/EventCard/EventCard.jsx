import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class EventCard extends Component {
  render() {
    const {data} = this.props;
    const params = `/events/${data.id}?name=${data.name}&category=${data.category}&image_path=${data.image_path}&timezome=${data.timezome}&start_time=${data.start_time}&end_time=${data.end_time}&event_price=${data.event_price}&translation_price=${data.translation_price}&`

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
                <small>Start from: {data.start_time}</small>
              </h4>
            </Link>
            {data.translation_price && <h4 style={{marginLeft: "auto"}}>{data.translation_price}$</h4>}
          </div>
          <h5 style={{height: "28px"}}>Category: {data.category && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px"}}>{data.category}</label>}</h5>
          <p className="description">{data.description}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
