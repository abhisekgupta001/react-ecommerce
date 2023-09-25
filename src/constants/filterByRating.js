export const filterByRating = (state, products) => {
    return products.filter((product)=> product.rating >= Number(state.ratingBy))
}