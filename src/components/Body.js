import RestrauntCard from "./RestrauntCard";
import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setUpdateList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    //console.log(json);
  };

  // conditional rendering
  // if (list.length === 0) {
  //   return (
  //     <h1>
  //       <Shimmer />
  //     </h1>
  //   );
  // }
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              let filteredRes = list.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              if (filteredRes.length == 0) {
                setUpdateList(list);
              } else {
                setUpdateList(filteredRes);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const temp = list.filter((r) => r.info.avgRating > 4);
            setList(temp);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {/* <RestrauntCard resData={resList[0]} */}
        {updateList.map((res) => {
          return <RestrauntCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
