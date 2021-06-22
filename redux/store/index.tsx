import { createStore} from "redux";
import reducer from "../reducers";
import middleWare from "../middle-ware";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools(middleWare));

export default store;