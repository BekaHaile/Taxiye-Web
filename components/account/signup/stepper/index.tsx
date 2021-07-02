import * as React from "react";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import styled from "styled-components";
import Information from "../driver/information";
import PhoneVerification from "../driver/phone-verification";
import VehicleType from "../driver/vehicle-type/";
import Documents from "../driver/documents/";
import LastPage from "../driver/finish";
import { useSelector } from "react-redux";
import { changeStep } from "../../../../redux/actions/driver";
import store from "../../../../redux/store";

const StepperContainer = styled("div")`
  width: 760px;
  margin: auto;
`;
const BackButton = styled("img")`
  padding-bottom: 10px;
`;
const steps = [
  "Driver Information",
  "Phone Verification",
  "Vehicle Type",
  "Documents",
];

export default function HorizontalLinearStepper() {
  const activeStep = useSelector((state) => state["driver"]["step"]);
  const [activeSubStep, setActiveSubStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeSubStep < 3 && activeStep == 3) {
      setActiveSubStep((activeSubStep) => activeSubStep + 1);
      return;
    }
   
    store.dispatch(changeStep(activeStep + 1));
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    if (activeSubStep > 0 && activeStep == 3) {
      setActiveSubStep((activeSubStep) => activeSubStep - 1);
      return;
    }
    store.dispatch(changeStep(activeStep - 1));
  };

  const goTo = (step) => {
    if (activeStep != steps.length && step < activeStep)
      store.dispatch(changeStep(activeStep));
  };

  return (
    <StepperContainer>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step onClick={() => goTo(index)} key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep != 0 && activeStep != steps.length ? (
          <BackButton
            onClick={handleBack}
            src={require("../../../../assets/icons/back-arrow.svg")}
          />
        ) : null}
      </div>
      <div>
        {activeStep === steps.length ? (
          <LastPage />
        ) : activeStep == 0 ? (
          <Information
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
          />
        ) : activeStep == 1 ? (
          <PhoneVerification handleNext={handleNext} handleBack={handleBack} />
        ) : activeStep == 2 ? (
          <VehicleType handleNext={handleNext} handleBack={handleBack} />
        ) : (
          <Documents handleNext={handleNext} activeSubStep={activeSubStep} />
        )}
      </div>
    </StepperContainer>
  );
}
