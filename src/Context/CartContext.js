import { createContext, useContext, useReducer } from "react";
import {cartInitialState, cartReducerFn} from "../hooks/cartReducer";

const cartContext=createContext(cartInitialState);


const CartProvider = ({children}) =>{

    const [state,dispatch] = useReducer(cartReducerFn, cartInitialState);
    

    const addToCart=(product)=>{
        const updatedCart = state.productsInsideCart.concat(product);
        updateTotal(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                productsInsideCart: updatedCart,
            }
        })
    }


    const removeFromCart = (product) =>{
        const updatedCart = state.productsInsideCart.filter((currentProduct) => currentProduct.id !== product.id)
        updateTotal(updatedCart);
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                productsInsideCart: updatedCart,
            }
        })
    }


    const updateTotal = (productsInsideCart) =>{
        let total = 0;
        productsInsideCart.forEach((product) => total += Number(product.price))
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                totalCartValue: total,
            }
        })
    }


    const value = {
        totalCartValue:state.totalCartValue,
        productsInsideCart: state.productsInsideCart,
        addToCart,
        removeFromCart,
        updateTotal
    }

    return(
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}


const useCart = () => useContext(cartContext);

export {useCart, CartProvider};