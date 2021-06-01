import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/booking/on-demand";
import {middleWare} from "../middle-ware/on-demand";

const store = createStore(reducer, applyMiddleware(middleWare));

export default store;