export const cartInitialState = {
    totalCartValue: 0,
    totalCartItems:0,
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
        case "INCREMENT_QUANTITY":
            {
                const updatedCart = state.productsInsideCart.map((selectedProduct) => {
                    if(selectedProduct.id === payload.id)
                    {
                        return {...selectedProduct, quantity:selectedProduct.quantity + 1}
                    }
                    else{
                        return selectedProduct;
                    }
                });
                return {...state, productsInsideCart: updatedCart}
            }
        case "DECREMENT_QUANTITY":
         {
            const updatedCart = state.productsInsideCart.map((selectedProduct) => {
                if(selectedProduct.id === payload.id)
                {
                    return {...selectedProduct, quantity: selectedProduct.quantity - 1}
                }
                else{
                    return selectedProduct;
                }
            }).filter((currProd) => currProd.quantity !== 0);
            return {...state, productsInsideCart: updatedCart}
        }
        case "UPDATE_ITEMS_IN_CART":
            {
            let {totalCartItems, totalCartValue} = state.productsInsideCart.reduce(
                (acc, curVal)=>{
                    let {quantity, price} = curVal;
                    let updatedCartTotal = price * quantity;
                    acc.totalCartValue += updatedCartTotal;
                    acc.totalCartItems += quantity;
                    return acc;
            },{totalCartItems: 0, totalCartValue:0});
            return {...state, totalCartItems, totalCartValue};
            }
        default:
            throw new Error(`type ${type} not defined by developer`)
    }

}
