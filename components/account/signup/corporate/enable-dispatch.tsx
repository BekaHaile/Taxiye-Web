import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import theme from "../../../../theme/main";

const Container = styled("div")`
margin-bottom:40px;
display:flex;
justify-content:start;
text-align:start;
}
`;
const CheckBox = styled("input")`
margin:0px;
}
`;
const CheckBoxLabel = styled("label")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color:${theme.colors.primaryTextColor};;
padding-left:10px;
}
`;


interface Props {
  checked?: boolean;
  action?;
}

const Dispatch: FunctionComponent<Props> = ({ action, checked }) => {
  return (
    <>
      <Container>
        <CheckBox
          checked={checked}
          onChange={() => action(!checked)}
          type="checkbox"
          id="dispatch"
          name="dispatch"
        />
        <CheckBoxLabel>Want to dispatch on your own?</CheckBoxLabel>
      </Container>
    </>
  );
};

export default Dispatch;
