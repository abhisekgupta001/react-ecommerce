export const cartInitialState = {
    totalCartValue: 0,
    productsInsideCart: [],
}


export const cartReducerFn = (state, action) =>{
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return{...state, productsInsideCart: payload.productsInsideCart}
        case "REMOVE_FROM_CART":
            return {...state, productsInsideCart:payload.productsInsideCart}
        case "UPDATE_TOTAL":
            return {...state, totalCartValue:payload.totalCartValue}
        default:
            throw new Error(`type ${type} not defined by developer`)
    }

}
