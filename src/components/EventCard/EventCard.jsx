import React, { Component } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';

export class EventCard extends Component {
  render() {
    const {data} = this.props;
    const params = `/events/${data.eventId}`

    return (
      <div className="card card-event">
        <div className="image">
          <img src={data.imagePath} alt="..." />
        </div>
        <div className="content">
          <div style={{display: "flex"}}>
            <Link to={params}>
              <h4 className="title">
                {data.eventName}
                <br />
                <small>Start from: {moment(data.startTime).format("MM/DD/YYYY")}</small>
              </h4>
            </Link>
            {data.eventPrice && <h4 style={{marginLeft: "auto"}}>{data.eventPrice}$</h4>}
          </div>
          <h5 style={{height: "28px"}}>Category: {data.category && <label style={{background: "#04B5FA",color: "white", padding: "5px",borderRadius: "8px", margin: "0px"}}>{data.category}</label>}</h5>
          <p className="description">{data.description}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
