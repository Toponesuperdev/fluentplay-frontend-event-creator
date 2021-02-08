import React from "react";
// import { Row, Col } from "react-bootstrap";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import NotificationSystem from "react-notification-system";
import routes from "routes.js";

import { style } from "variables/Variables.jsx";

import image from "assets/img/sidebar-3.jpg";

const Main = (props) => {
  const { children } = props;
  const notificationRef = React.useRef(null);
  const mainPanelRef = React.useRef(null);

  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
          props.location.pathname.indexOf(
          routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  }

  return(
    <div>
      <NotificationSystem 
        ref={notificationRef}
        style={style} 
      />
      <Sidebar 
          {...props}
          routes={routes}
          image={image}
          color={"block"}
          hasImage={true}
      />
      <div id="main-panel" className="main-panel" ref={mainPanelRef}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Main;