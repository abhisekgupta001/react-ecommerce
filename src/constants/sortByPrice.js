export const sortByPrice= (state, products) =>{
    switch(state.sortBy){
        case "LOW_TO_HIGH":
            return [...products].sort((item1, item2) => {
                return item1.price - item2.price;
            })
        case "HIGH_TO_LOW":
            return [...products].sort((item1, item2) => {
                return item2.price - item1.price;
            })
        default:
            return products;
    }

}