import React from "react";
import SafetyComponent from "./safety";
import GetStarted from "./get-started";
import WorkFreedom from "./work-freedom";
import Requirements from "./requirements";

const SignUp = () => {
  return (
    <>
        <WorkFreedom></WorkFreedom>
        <Requirements></Requirements>
        <SafetyComponent></SafetyComponent>
        <GetStarted></GetStarted>
    </>
  );
};

export default SignUp;
