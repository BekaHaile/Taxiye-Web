import React, { useEffect } from "react";
import WrappedMap from "../map/booking";
import Container from "./container";
import { useSelector } from "react-redux";

import store from "../../redux/store";
import { setDeviceToken } from "../../redux/actions/user/index";
import { assignDriver } from "../../redux/actions/booking/index";

import { app } from "../../firebase/config";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const Mapview = () => {
  const origin = useSelector((state) => state["booking"]["origin"]);
  const destination = useSelector((state) => state["booking"]["destination"]);
  const listOfVehicles = useSelector(
    (state) => state["booking"]["availableVehicles"]
  );

  useEffect(() => {
    const messaging = getMessaging(app);
    askPermission(messaging);
    getMessageData(messaging);
    
  });

  function getMessageData(messaging) {
    getToken(messaging, {
      vapidKey: "BP1VvyzC_0jdVQ3VX6lkGGNmxxySsSn3rluLMvgAUlCLjmXWeuXbdS7JgbpdGxgSvhq6DWqd5RvBUPGh_G52jcA",
    })
      .then((currentToken) => {
        if (currentToken) {
          store.dispatch(setDeviceToken(currentToken));
          console.log(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
          askPermission(messaging);
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }

  function askPermission(messaging) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // TODO(developer): Retrieve a registration token for use with FCM.
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        getMessageData(messaging);
      } else {
        console.log("Unable to get permission to notify.");
      }
    });
  }

  return (
    <>
      <div style={{ zIndex: 10000, width: "100wh", height: "100vh" }}>
        <WrappedMap
          listOfVehicles={listOfVehicles}
          originAction={origin.location}
          directionAction={destination.location}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <Container />
    </>
  );
};

export default Mapview;
