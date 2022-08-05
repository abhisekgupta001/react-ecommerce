export const initialState = {
    productsInWishlist: []
}

export const wishlistReducerFn = (state, action) =>{
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_WISHLIST":
            return {...state, productsInWishlist:payload.productsInWishlist}
        case "REMOVE_FROM_WISHLIST":
            return {...state, productsInWishlist:payload.productsInWishlist}
        default:
            return state;
    }
    
}