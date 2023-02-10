import React from "react";
// this location info component is for if some one 
//click on the marker it will show information
const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <h2> Event Location Info</h2>
      <li>
        ID: <strong>{info.id}</strong>
      </li>
      <li>
        TITLE: <stong>{info.title}</stong>
      </li>
    </div>
  );
};

export default LocationInfo;
