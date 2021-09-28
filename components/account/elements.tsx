import styled from "styled-components";
import { Form } from "../form/inputs";
import { Button } from "../form/buttons/primary-button";
import theme from "../../theme/main";

const ContentWrapper = styled("div")`
  display: flex;
`;

const CustomButton = styled(Button)`
  margin-bottom: 40px;
  padding: 7.5px 20px;
`;

const NavLink = styled.a`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.primary};
  margin-top: 0px;
  padding: 0px 0px;
  padding-right: 20px;
  text-decoration: none;
`;

const Title = styled("h3")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  padding-bottom: 20px;
  padding-right: 10px;

  /* Black / 444 */

  color: ${theme.colors.primaryTextColor}; ;
`;

const SubTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  padding-right: 10px;
  /* Black / 444 */

  color: ${theme.colors.primaryTextColor}; ;
`;

const FormContainer = styled("div")`
  padding: 5px;
  position: relative;
  width: 100%;
  overflow-y: scroll;
  max-height: 100vh;
`;

const FlexContainer = styled("div")`
  display: flex;
  padding-bottom: 40px;
  flex-wrap: wrap;
  gap: 5px;
`;
const CenteredForm = styled("div")`
  width: fit-content;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const Avatar = styled("img")`
  height: 22px;
  width: 15px;
  padding: 0px 5px 0px 0px;
`;
const CheckBoxContainer = styled("div")`
  padding: 32px 0px 40px 0px;
`;

const HeaderContainer = styled("div")`
  padding-bottom: 60px;
  width: 450px;
  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;

const ContentContainer = styled("div")`
@media (max-width: 768px) {
  padding: 20px;
  width: 100%;
}`;
const InputContainer = styled("div")`
  width: 350px;
`;

export {
  ContentWrapper,
  FlexContainer,
  CustomButton,
  CheckBoxContainer,
  ContentContainer,
  HeaderContainer,
  CenteredForm,
  FormContainer,
  Avatar,
  NavLink,
  Title,
  SubTitle,
  InputContainer,
};
