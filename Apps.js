import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className = 'logo' src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "95228",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ed859a04-8f52-434b-aca9-6de31d0247fd_95228.JPG",
      locality: "SRMT Mall",
      areaName: "Kakinada",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-08 22:00:00",
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
        header: "ITEMS",
        subHeader: "AT ₹169",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/kfc-srmt-mall-kakinada-rest95228",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "240795",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5d3c3334-b167-46d8-9700-055ab9179988_240795.JPG",
      locality: "SRMT Mall",
      areaName: "Kakinada",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/pizza-hut-srmt-mall-kakinada-rest240795",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1027588",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/70764c3f-8fe4-457e-b637-eb3483b32181_1027588.JPG",
      locality: "Krishna Geeta Complex",
      areaName: "Kakinada",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "351",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 8.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-09 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/olio-the-wood-fired-pizzeria-krishna-geeta-complex-kakinada-rest1027588",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "716484",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/1517f270-74fa-41a6-9879-1c26ed7113ec_716484.JPG",
      locality: "Nagamallithota junction",
      areaName: "Satya Complex",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "817",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/the-belgian-waffle-co-nagamallithota-junction-satya-complex-rest716484",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "657472",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8ace35f6-df74-44db-848f-778985ecb8b4_657472.jpg",
      locality: "Ramasomayajulu Street",
      areaName: "Kakinada",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
      parentId: "166",
      avgRatingString: "4.5",
      totalRatingsString: "8.5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-09 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/burger-king-ramasomayajulu-street-kakinada-rest657472",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "103033",
      name: "Food Park Family Restaurant",
      cloudinaryImageId: "wuxfcmpwh9m1mfehl94x",
      locality: "Kakinada",
      areaName: "Kakinada",
      costForTwo: "₹249 for two",
      cuisines: ["Biryani", "North Indian", "South Indian", "Chinese"],
      avgRating: 4.2,
      parentId: "12732",
      avgRatingString: "4.2",
      totalRatingsString: "63K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-09 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "93907",
      name: "Yati",
      cloudinaryImageId: "u2uui5oez6yuzbq10cwb",
      locality: "Kakinada",
      areaName: "Bhanugudi",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian", "North Indian", "Chinese"],
      avgRating: 4.1,
      parentId: "557800",
      avgRatingString: "4.1",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-08 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/yati-bhanugudi-rest93907",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "613182",
      name: "Rajugari Vindhubojanam",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/0507d630-51a4-4c59-a0e0-0d6bf06c05a5_613182 (1).jpg",
      locality: "Kakinada",
      areaName: "Kakinada",
      costForTwo: "₹349 for two",
      cuisines: ["Biryani", "Chinese", "South Indian"],
      avgRating: 4.2,
      parentId: "365786",
      avgRatingString: "4.2",
      totalRatingsString: "7.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-08 23:00:00",
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
        header: "ITEMS",
        subHeader: "AT ₹89",
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
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e8f04d0-d921-43d1-880f-d4a6f8d95840",
    },
    cta: {
      link: "https://www.swiggy.com/city/kakinada/rajugari-vindhubojanam-kakinada-rest613182",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
]; 


const RestaurantCard = ({resData}) =>{
    const {cloudinaryImageId,name,avgRating,cuisines,sla} = resData?.info
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="rest-logo"
          alt="rest-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
        <h4>{cuisines.join(', ')}</h4>
      </div>
    );
}

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                resList.map(rest =>  <RestaurantCard key={rest.info.id} resData={rest}/>)
            }
        </div>
      </div>
    );
}

const AppLayout = () => {
   return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
   ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< AppLayout/>)