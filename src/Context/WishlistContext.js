import {createContext, useContext, useReducer } from "react";
import { wishlistReducerFn, initialState } from "../hooks/wishlistReducer";


const WishlistContext = createContext(initialState);

const WishlistProvider = ({children}) =>{
    const [state, dispatch] = useReducer(wishlistReducerFn, initialState);


    const addToWishlist = (product) =>{
        const updatedWishlist = state.productsInWishlist.concat(product);
        dispatch({
            type:"ADD_TO_WISHLIST",
            payload:{
               productsInWishlist: updatedWishlist 
            }
        })
    }

    const removeFromWishlist = (product) =>{
        const updatedWishlist = state.productsInWishlist.filter((currentProduct)=>currentProduct.id !== product.id);
        dispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload:{
                productsInWishlist: updatedWishlist  
            }
        })
    }


    const value={
        productsInWishlist:state.productsInWishlist,
        addToWishlist,
        removeFromWishlist
    }

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    )
}


const useWishlist = () => useContext(WishlistContext);

export {useWishlist, WishlistProvider};