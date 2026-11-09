import RestaurantCard from "./RestaurantCard";
import { useEffect,useState } from "react";
import reslist from "../utils/mockData";


const Body=()=>{

    const[listofrestaurants,setlistofrestaurants]=useState([]);
    
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData =async () =>{
        
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.412950760357788&lng=78.35019528865814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        
        setlistofrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };


    if(listofrestaurants.length === 0){
        return <h1>Loading...</h1>
    }


    return (
        <div className="body">
            <div className="filter-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search restaurants..." />
                </div>
                <div>
                    <button className="filter-btn" onClick={()=>{
                        const filteredList=listofrestaurants.filter((res)=>res.info.avgRating>4.5);
                        setlistofrestaurants(filteredList);
                    }}>Top Rated restaurant </button>
                </div>
            </div>
            <div className="restaurant-list">
                {listofrestaurants.map((restaurant )=> (<RestaurantCard 
                key={restaurant.info.id} resData={restaurant.info} />))}
            </div>
        </div>
    );
};

export default Body;