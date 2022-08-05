import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {cartInitialState, cartReducerFn} from "../hooks/cartReducer";

const cartContext=createContext(cartInitialState);


const CartProvider = ({children}) =>{

    const [state,dispatch] = useReducer(cartReducerFn, cartInitialState);
    

    const addToCart=(product)=>{
        const updatedCart = state.productsInsideCart.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                productsInsideCart: updatedCart,
            }
        })
    }


    const removeFromCart = (product) =>{
        const updatedCart = state.productsInsideCart.filter((currentProduct) => currentProduct.id !== product.id)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                productsInsideCart: updatedCart,
            }
        })
    }

    const incrementQuantity = ({id}) =>{

        dispatch ({
            type:"INCREMENT_QUANTITY",
            payload:{
                id,
            }
        })
    }


    const decrementQuantity = ({id}) =>{

        dispatch ({
            type:"DECREMENT_QUANTITY",
            payload:{
                id,
            }
        })
    }
 
    useEffect(()=>{
        dispatch({
            type:"UPDATE_ITEMS_IN_CART",
        })
    },[state.productsInsideCart]);

   

    const value = {
        totalCartValue:state.totalCartValue,
        totalCartItems:state.totalCartItems,
        productsInsideCart: state.productsInsideCart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity
    }

    return(
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}


const useCart = () => useContext(cartContext);

export {useCart, CartProvider};