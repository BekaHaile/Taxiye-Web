import * as actionTypes from "../../types/user/sider";
/*
// The state of user data is declared here
// It will be usable based on the action fired
// State will be changed based on the actions specified
// 
*/
const initialState = {
  visbility: false,
  menu_item: "booking",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.VISIBILITY_CHANGED:
      return {
        ...state,
        visbility: !state.visbility,
      };
    case actionTypes.MENU_ITEM_CHANGED:
      return {
        ...state,
        menu_item: action.payload.menu_item,
      };
    default:
      return state;
  }
}
