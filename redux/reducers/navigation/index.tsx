import * as actionsTypes from "../../types/navigation";
/*
// Here page navigation state will be managed
// Additionally information that needs to be shown
// Will be fired here
*/
const initialState = {
  page: "",
  message: {
    text: "This is the message",
    type: "success",
    show: false,
  },
  isMenuActive:false
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.NAVIGATION_STARTED:
      return { ...state, page: action.payload.page };
    case actionsTypes.MESSAGE_SHOWED:
      return { ...state, message: action.payload.message };
    case actionsTypes.MENU_SELECTION_CHANGED:
      return { ...state, isMenuActive: action.payload.isMenuActive };
    default:
      return state;
  }
}
