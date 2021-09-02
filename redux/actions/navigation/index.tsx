import * as actions from "../../types/navigation";

/*
// This function is responsible to managed page changes actions
// Whenever page is change it will fire a navigation started action 
// 
*/
export const goTo = (page) => {
  return {
    type: actions.NAVIGATION_STARTED,
    payload: {
      page: page,
    },
  };
};

/*
// 
*/

export const goBack = () => {
  return {
    type: actions.NAVIGATION_STARTED,
  };
};

export const goFuture = () => {
  return {
    type: actions.NAVIGATION_STARTED,
  };
};

/*
// Called whenever there is a service that needs to enable/show
// Snackbar. This function takes show status, message and type as an
// Argument and fires message showed action
*/

export const showMessage = (show, message, type) => {
  return {
    type: actions.MESSAGE_SHOWED,
    payload: {
      message: {
        show: show,
        text: message,
        type: type,
      },
    },
  };
};
