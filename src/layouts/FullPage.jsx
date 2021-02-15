import React from "react";
// import { Row, Col } from "react-bootstrap";
import FullPageNavbar from "components/Navbars/FullPageNavbar";

const FullPage = (props) => {
  const { children } = props;
  return (
    <div className="wrapper-full-page">
      <FullPageNavbar
        {...props}
        // brandText={getBrandText(props.location.pathname)}
      />
      {children}
      <div className="full-page-background" style={{backgroundImage: "url('./444.jpg')"}}></div>
    </div>
  );
}

export default FullPage;
