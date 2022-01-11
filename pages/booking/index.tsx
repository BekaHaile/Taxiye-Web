import React, { useEffect } from "react";
import BookingService from "../../components/booking";

import store from "../../redux/store";
import { setDeviceToken } from "../../redux/actions/user/index";
import { assignDriver } from "../../redux/actions/booking/index";

import { app } from "../../firebase/config";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { gql } from "@apollo/client";
import client from "../../backend-client";
import DefaultErrorPage from "next/error";

const query = gql`
  # This is query
  query PageLayout($locale: String!) {
    bookingContent: bookingForm(locale: $locale) {
      id
      bookingForm {
        key
        type
        title
        subTitle
        originLocationTextField {
          label
          placeHolder
          icon {
            url
          }
        }
        destinationLocationTextField {
          label
          placeHolder
          icon {
            url
          }
        }
        departureDateTextField {
          label
          placeHolder
          icon {
            url
          }
        }
        departureTimeTextField {
          label
          placeHolder
          icon {
            url
          }
        }
        requestButton {
          text
        }
      }
    }
  }
`;

export async function getServerSideProps(context) {
  const { locale } = context;
  // console.log(context);
  try {
    const { data, error } = await client.query({
      query: query,
      variables: { locale: locale ? locale : "en" },
    });

    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    return { props: { error: true } };
  }
}
const Booking = ({ data, error }) => {
  useEffect(() => {
    try {
      const messaging = getMessaging(app);

      // onMessage(messaging, (payload) => {
      //   console.log("Message received. ", payload);
      //   // store.dispatch(assignDriver({}));
      // });
      askPermission(messaging);
      getMessageData(messaging);
    } catch (e) {}
  });

  function getMessageData(messaging) {
    getToken(messaging, {
      vapidKey:
        "BP1VvyzC_0jdVQ3VX6lkGGNmxxySsSn3rluLMvgAUlCLjmXWeuXbdS7JgbpdGxgSvhq6DWqd5RvBUPGh_G52jcA",
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
  if (error)
    return <DefaultErrorPage className="error-page" statusCode={404} />;
  return <BookingService bookingForm={data?.bookingContent?.bookingForm} />;
};

export default Booking;
