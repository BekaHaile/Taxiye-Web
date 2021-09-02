import React from "react";
import styled from "styled-components";
import theme from "../../../../../theme/main";
import { Popover, Button } from "antd";

const HeaderContainer = styled("div")`
  background: ${theme.colors.white};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
const Title = styled("span")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.primaryTextColor};
  vertical-align: middle;
  display: inline-block;
`;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Container = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Manual Dispatch</Title>
        <Popover
          title="Fare Estimation"
          content={content}
          trigger="click"
        >
          <Button>Estimation</Button>
        </Popover>
      </HeaderContainer>
    </>
  );
};

export default Container;
