import {CDN_URL} from "../utils/links";

const RestaurantCard=({resData})=>{
    // const {resData}=props;

    return (
        <div className="restaurant-card" >
            <img className="restaurant-img"src={CDN_URL + resData.cloudinaryImageId} alt="Restaurant_img" />
            <h2>{resData.name}</h2>
            <h3>Rating: {resData.avgRating}/5</h3>
            <h4>Delivery Time: {resData.sla.deliveryTime} mins</h4>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>Cost for two: {resData.costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;