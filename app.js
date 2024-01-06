// Header
// ----> logo
// ----> nav-items
// body
// ----> Search
// ----> restraunt container
// ----> restraunt card
//           ---> image, name of res, Rating, quisine, delivery time
// footer
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/1tPQ_WJHWTliGN-Hs1OSHIJSv3Mo9NKerpVBUV0iUlQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wOC8xLi1n/cnViaHViLWxvZ28u/anBn"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}</h3>
      <h3>{deliveryTime} minutues</h3>
    </div>
  );
};
const resList = [
  {
    info: {
      id: "240107",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Rajpur Road",
      areaName: "Karanpur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-rajpur-road-karanpur-dehradun-240107",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "78973",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Vasant Vihar",
      areaName: "Balliwala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      parentId: "721",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-vasant-vihar-balliwala-dehradun-78973",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "628872",
      name: "Starbucks Coffee",
      cloudinaryImageId: "258fe8a3577877fbfe064095ed1d9dc3",
      locality: "Unison Mall",
      areaName: "Hathibarkala",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.2,
      parentId: "195515",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-unison-mall-hathibarkala-dehradun-628872",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "807972",
      name: "Theobroma",
      cloudinaryImageId: "9090b10c3527edf449f4d1e5bcab0d71",
      locality: "Gandhi Park",
      areaName: "RAJPUR ROAD",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 5,
      parentId: "1040",
      avgRatingString: "5.0",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-gandhi-park-rajpur-road-dehradun-807972",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "790985",
      name: "7Th Heaven",
      cloudinaryImageId: "81bd3fda2e3cf8972acbe45d1e5d65b8",
      locality: "Govind Nagar",
      areaName: "Hathibarkala",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery"],
      avgRating: 4,
      veg: true,
      parentId: "19",
      avgRatingString: "4.0",
      totalRatingsString: "9",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/7th-heaven-govind-nagar-hathibarkala-dehradun-790985",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "69701",
      name: "Ellora'S Melting Moments",
      cloudinaryImageId: "hs6dvsaa4e3mo83gaflx",
      locality: "Rajpur Road",
      areaName: "Chukkuwala",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Snacks", "Desserts", "Italian"],
      avgRating: 4.4,
      parentId: "13689",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/elloras-melting-moments-rajpur-road-chukkuwala-dehradun-69701",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "532213",
      name: "Chilli'Z Restro",
      cloudinaryImageId: "mzsuzzznrww2mpzwk27d",
      locality: "Prem Nagar",
      areaName: "Prem Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Snacks", "Beverages"],
      avgRating: 4.2,
      parentId: "13645",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 23:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chilliz-restro-prem-nagar-dehradun-532213",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "69447",
      name: "Gaylord Express",
      cloudinaryImageId: "uj68ybtfwbydewraxzhm",
      locality: "Paltan Bazaar Road",
      areaName: "Paltan Bazaar",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Bakery", "South Indian", "Pizzas", "Beverages"],
      avgRating: 3.8,
      parentId: "13696",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-13 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gaylord-express-road-paltan-bazaar-dehradun-69447",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "88166",
      name: "Nath'S Chinese",
      cloudinaryImageId: "fsm15mqsuninmtb6twec",
      locality: "Lakkhi Bagh",
      areaName: "Khurbura",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 4.3,
      parentId: "13608",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-06 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4f7600dc-9025-4ac3-bce8-478edd6e4cbc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/naths-chinese-lakkhi-bagh-khurbura-dehradun-88166",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestrauntCard resData={resList[0]} />
        <RestrauntCard resData={resList[1]} />
        <RestrauntCard resData={resList[2]} />
        <RestrauntCard resData={resList[3]} />
        <RestrauntCard resData={resList[4]} />
        <RestrauntCard resData={resList[5]} />
        <RestrauntCard resData={resList[6]} />
        <RestrauntCard resData={resList[7]} /> */}
        <RestrauntCard resData={resList[8]} />
        {resList.map((res) => {
          return <RestrauntCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

root.render(<App />);
