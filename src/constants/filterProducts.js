import {sortByPrice} from "../constants/sortByPrice";
import { filterByRating } from "./filterByRating";

export const filterProducts = (state, products) =>{
    if(state.ratingBy !== 1)
    {
        products = filterByRating(state, products);
    }
    
    if(state.sortBy !== "")
    {
        products = sortByPrice(state, products);
    }

    return products;
}