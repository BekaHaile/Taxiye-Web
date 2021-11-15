import { createStore } from "redux";
import reducer from "../reducers";
import middleWare from "../middle-ware";
import { composeWithDevTools } from "redux-devtools-extension";

/**
    The store for the whole project goes here,
    And this enables creating a store with list of
    reducers and middleware.
    composeWithDevTools is used for debugging purpose.
*/
const store = createStore(reducer, composeWithDevTools(middleWare));

export default store;
