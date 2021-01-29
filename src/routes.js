/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Dashboard from "views/Dashboard.jsx";
// import UserProfile from "views/UserProfile.jsx";
// import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
// import Icons from "views/Icons.jsx";
// import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
import EventInformation from "views/EventInformation.jsx";
import SessionInformation from "views/SessionInformation.jsx";
import Sponsors from "views/Sponsors.jsx";
// import { Redirect } from "react-router";
// import Upgrade from "views/Upgrade.jsx";

import CreateEvent from "views/CreateEvent.jsx"
import EditEvent from "views/EditEvent.jsx"
import CreateSession from "views/CreateSession.jsx"
import EditSession from "views/EditSession.jsx"
import CreateSponsor from "views/CreateSponsor.jsx"
import EditSponsor from "views/EditSponsor.jsx"

const dashboardRoutes = [
  {
    path: "/events",
    name: "Event Information",
    icon: "pe-7s-user",
    component: EventInformation,
    layout: "/admin",
    sidebar: true,
    exact: true
  },
  {
    path: "/events/new",
    name: "Event Information",
    icon: "pe-7s-user",
    component: CreateEvent,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/events/:id",
    name: "Event Information",
    icon: "pe-7s-user",
    component: EditEvent,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/sessions",
    name: "Session Information",
    icon: "pe-7s-user",
    component: SessionInformation,
    layout: "/admin",
    sidebar: true,
    exact: true
  },
  {
    path: "/sessions/new",
    name: "Session Information",
    icon: "pe-7s-user",
    component: CreateSession,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/sessions/:id",
    name: "Session Information",
    icon: "pe-7s-user",
    component: EditSession,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    icon: "pe-7s-user",
    component: Sponsors,
    layout: "/admin",
    sidebar: true,
    exact: true
  },
  {
    path: "/sponsors/new",
    name: "Sponsors",
    icon: "pe-7s-user",
    component: CreateSponsor,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/sponsors/:id",
    name: "Sponsors",
    icon: "pe-7s-user",
    component: EditSponsor,
    layout: "/admin",
    sidebar: false
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "pe-7s-graph",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
