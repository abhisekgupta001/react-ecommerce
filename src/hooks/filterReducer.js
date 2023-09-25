export const initialState = {
    sortBy: "",
    ratingBy:1,
    category:[],
}

export const filterReducerFn = (state, action) =>{

    
    switch(action.type){
        case "CATEGORY":
            return {...state, category: state.category.includes(action.payload) ? state.category.filter((cat) => cat !== action.payload) : [...state.category, action.payload]}
        case "RATING":
            return {...state, ratingBy:action.payload}
        case "SORT_BY_PRICE":
            return {...state, sortBy: action.payload}
        default:
            return state;
    }
}