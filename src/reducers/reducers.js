import {combineReducers} from "redux";

//reducers
import fetchData from "./fetch_data";



//combined reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    fetch_data_reducer: fetchData,
});

export default reducers;