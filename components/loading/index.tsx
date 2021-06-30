import React from "react";
import styled from "styled-components";
import theme from "../../theme/main";

const LoadingView = styled("div")`
  display: block;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  margin-top: -30px;
`;

const LoadingContent = styled("div")`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;
const Text = styled("h3")`
  color: ${theme.colors.primaryTextColor};
`;

const Loading = () => {
  return (
    <>
      <LoadingView>
        <LoadingContent>
          <div className="lds-hourglass">
            <Text>Loading...</Text>
          </div>
        </LoadingContent>
      </LoadingView>
    </>
  );
};

export default Loading;
