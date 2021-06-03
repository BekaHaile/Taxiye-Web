import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/booking";
import {middleWare} from "../middle-ware/booking";

const store = createStore(reducer, applyMiddleware(middleWare));

export default store;