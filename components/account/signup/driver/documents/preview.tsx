import styled from "styled-components";
import theme from "../../../../../theme/main";

const ImagePreview = styled("img")`
  width: 150px;
  height: 150px;
  filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
  border-radius: 5px;
`;

const CloseButton = styled("div")`
  width: 12px;
  height: 12px;
  background-color: #bbb;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  text-align: center;
  right: -5px;
  top: -5px;
  background: ${theme.colors.primary};
  color: #fff;
  font-weight: bold;
  font-size: 8px;
  cursor: pointer;
`;
const ImageContainer = styled("div")`
  position: relative;
  width: fit-content;
`;

const Preview = ({deleteAction, image }) => {
  return (
    <>
      <ImageContainer>
        <ImagePreview src={URL.createObjectURL(new Blob(image))} />
        <CloseButton onClick={deleteAction}> x </CloseButton>
      </ImageContainer>
    </>
  );
};

export default Preview;
