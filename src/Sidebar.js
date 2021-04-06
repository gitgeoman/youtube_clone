import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      im a sidebar
      <SidebarRow title="home" />
      <SidebarRow title="trending" />
      <SidebarRow title="Subscription" />
      <SidebarRow title="" />
      <SidebarRow title="" />
    </div>
  );
}

export default Sidebar;
