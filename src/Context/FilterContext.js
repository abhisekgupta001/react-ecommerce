import { useReducer } from "react";
import { useContext, createContext } from "react";
import {filterReducerFn, initialState} from "../hooks/filterReducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);


const FilterProvider = ({children}) =>{
    const [filterState, filterDispatch] = useReducer(filterReducerFn, initialState);

    return <FilterContext.Provider value={{filterState, filterDispatch}}>{children}</FilterContext.Provider>
}


export {FilterProvider, useFilter};