import * as actions from "../../types/user/sider";

export const changeVisibiity = () => {
  return {
    type: actions.VISIBILITY_CHANGED,
  };
};

export const changeMenuItem = (menu_item) => {
  return {
    type: actions.MENU_ITEM_CHANGED,
    payload: {
      menu_item: menu_item,
    },
  };
};
