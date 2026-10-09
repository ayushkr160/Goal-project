import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";

const Body=()=>{
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search restaurants..." />
            </div>
            <div className="restaurant-list">
                {reslist.map((restaurant )=> (<RestaurantCard 
                key={restaurant.info.id} resData={restaurant.info} />))}
            </div>
        </div>
    );
};

export default Body;