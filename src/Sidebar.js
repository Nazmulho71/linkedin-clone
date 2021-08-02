import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__icon">
        <GroupIcon />
      </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/originals/d9/11/96/d91196b3dc2628506dfca2e92ccbf22e.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">326</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">1,193</p>
        </div>
      </div>

      <div className="sidebar__others">
        <div className="sidebar__other">
          <p>Access exclusive tools & insights</p>
          <p className="sidebar__otherPremium">Try Premium for free</p>
        </div>
      </div>

      <div className="sidebar__myitems">
        <div className="sidebar__myitem">
          <TurnedInIcon />
          <p className="sidebar__item">My Items</p>
        </div>
      </div>

      <div className="sidebar__analytics">
        <div className="visitors">
          <img
            src="https://lh3.googleusercontent.com/SYtqiUp_X5dE_2ek-aHXnHrTCnG6S9OjKUqIXpMCSMvuf-JyiwMHYFUmxpTdSY8Z28c=w280-rwa"
            alt=""
          />
          <h2>Company</h2>
        </div>

        <div className="sidebar__analytic">
          <p>Page notifications</p>
          <p className="sidebar__analyticNum">13</p>
        </div>
        <div className="sidebar__analytic">
          <p>Page visitors</p>
          <p className="sidebar__analyticNum">46</p>
        </div>
      </div>

      <div className="sidebar__seevisitors">
        <div className="sidebar__seevisitor">
          <p className="sidebar__seevisit">See visitors analytics</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="recentHead">
          <div className="recentText">
            <p>Recent</p>
          </div>
          <div className="expandIcon">
            <ExpandLessIcon />
          </div>
        </div>
        {recentItem("Developers, Engineers...")}
        {recentItem("UI/UX Design Inspirat...")}
        {recentItem("Python Data Science, ...")}
        {recentItem("React Developers - Re...")}
        {recentItem("JavaScript")}

        <div className="groupHead">
          <div className="groupText">
            <p>Groups</p>
          </div>
          <div className="expandIcon">
            <ExpandLessIcon />
          </div>
        </div>
        {recentItem("Developers, Engineers...")}
        {recentItem("UI/UX Design Inspirat...")}
        {recentItem("Python Data Science, ...")}

        <div className="moreText">
          <p>
            Show more
            <ExpandMoreIcon />
          </p>
        </div>

        <div className="eventText">
          <p>Events</p>
          <AddIcon />
        </div>

        <div className="followText">
          <p>Followed Hashtags</p>
        </div>
      </div>
      <div className="sidebar__discoverMore">
        <div className="sidebar__discover">
          <p className="sidebar__discoverMoreText">Discover more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
