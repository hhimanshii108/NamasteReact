import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import React from "react";
import { useState } from "react";
const Body = () => {
  const [list, setList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const temp = list.filter((r) => r.info.avgRating > 4);
            setList(temp);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {/* <RestrauntCard resData={resList[0]} */}
        {list.map((res) => {
          return <RestrauntCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
