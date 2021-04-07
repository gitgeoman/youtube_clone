import React from "react";

//internal components import
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

//icons from material@ui
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";

import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import OndemandVideoSharpIcon from "@material-ui/icons/OndemandVideoSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Subscription" />
      <SidebarRow Icon={HistorySharpIcon} title="Subscription" />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Subscription" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Subscription" />
      <SidebarRow Icon={ThumbUpAltSharpIcon} title="Subscription" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <SidebarRow Icon={ExpandMoreSharpIcon} title="Subscription" />
      <hr />
    </div>
  );
}

export default Sidebar;
