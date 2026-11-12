import RestaurantCard from "./RestaurantCard";
import { useEffect,useState } from "react";
import reslist from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";


const Body=()=>{

    const[listofrestaurants,setlistofrestaurants]=useState([]);


    const[filteredRestaurants,setFilteredRestaurants]=useState([]);

    const[searchText,setSearchText]=useState("");
    
    console.log("Body Rendered");
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData =async () =>{
        
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.412950760357788&lng=78.35019528865814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        
        setlistofrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    // fetchData();


    if(listofrestaurants.length === 0){
        return <div><ShimmerUI /></div>;
    }


    return (
        <div className="body">
            <div className="filter-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search restaurants..." value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
                    <button className="search-btn" onClick={()=>{

                        const filteredRestaurant=listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(searchText);
                        setFilteredRestaurants(filteredRestaurant);  
                    }}>Search</button>
                </div>
                <div>
                    <button className="filter-btn" onClick={()=>{
                        const filteredList=listofrestaurants.filter((res)=>res.info.avgRating>4.3);
                        setlistofrestaurants(filteredList);
                    }}>Top Rated restaurant </button>
                </div>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant )=> (<RestaurantCard 
                key={restaurant.info.id} resData={restaurant.info} />))}
            </div>
        </div>
    );
};

export default Body;