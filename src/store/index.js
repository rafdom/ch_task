import { createStore, applyMiddleware } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
