import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0];
  resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      {/* <h2>{name}</h2> */}
      <h2> {name}</h2>
      <h2>{cuisines.join(" ,")}</h2>
      <img className="menu-img" src={CDN_URL + cloudinaryImageId} />
      <h2>{costForTwoMessage}</h2>

      {itemCards.map((item) => {
        return (
          <li key={item.card.info.id}>
            {item.card.info.name}-
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}Rs
          </li>
        );
      })}
    </div>
  );
};

export default ResMenu;
