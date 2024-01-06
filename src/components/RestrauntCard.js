import { CDN_URL } from "../utils/constants";
import React from "react";
const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}</h3>
      <h3>{deliveryTime} minutues</h3>
    </div>
  );
};
export default RestrauntCard;
