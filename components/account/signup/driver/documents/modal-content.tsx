import styled from "styled-components";
import theme from "../../../../../theme/main";
import { HeaderContainer } from "../../../elements";
import { CustomButton } from "../../../elements";

export const Container = styled("div")`
  padding-bottom: 30px;
`;
export const BackButton = styled("img")`
  padding-bottom: 10px;
`;
export const ModalTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  width:410px;
`;
export const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

export const FixedCustomButton = styled(CustomButton)`
  margin-bottom: 0px;
`;

export const ModalContentContainer = styled("div")`
text-align:center;
`;

export const InfoText = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const FixedCustomButtonWithSpace = styled(FixedCustomButton)`
color:${theme.colors.primary};
border: 1px solid ${theme.colors.primary};
margin-right:30px;
background-color:${theme.colors.transparent};
}
`;