import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const topArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Today’s top courses</h2>
        <InfoIcon />
      </div>

      {topArticle("Listening to Customers", "Noah Fleming")}
      {topArticle(
        "Think Like a Lawyer to Make Decisions and Solve Problems",
        "Kim Wehle"
      )}
      {topArticle(
        "Communication Foundations",
        "Brenda Bailey-Hughes and Tatiana Kolovou"
      )}
      <h4>
        Show more on LinkedIn Learning
        <ArrowRightAltIcon />
      </h4>
    </div>
  );
}

export default Widgets;
