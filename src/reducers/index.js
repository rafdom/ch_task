import { combineReducers } from "redux";
import orderReducer from "./orders";

const rootReducer = combineReducers({ orders: orderReducer });

export default rootReducer;
