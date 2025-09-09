import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  let [listOfRests,setlistOfRests] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-button" onClick={()=>{
            listOfRests = listOfRests.filter((res)=> res.info.avgRating >= 4.5)
            setlistOfRests(listOfRests)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
            {
                listOfRests.map((rest) =>  <RestaurantCard key={rest.info.id} resData={rest}/>)
            }
        </div>
      </div>
    );
}

export default Body