import React, { useState } from "react";
import styled from "styled-components";
import {SubTitle} from "../../../elements";
import FileSelector from "./file-selector";

const MainContainer = styled("div")`
display:flex;
margin-top:20px;
margin-bottom:60px;
`;

const Container = styled("div")`

margin-right:30px;
`;

const SubTitleWithSpace = styled(SubTitle)`

padding-bottom:10px;
`;




const Document = () => {
    const [imageUrlFront, setImageFront] = useState("");
    const [imageUrlSide, setImageSide] = useState("");
    return (
        <>
            <MainContainer>
                <Container>
                    <SubTitleWithSpace>Front view</SubTitleWithSpace>
                    <FileSelector setImage={setImageFront} imageUrl={imageUrlFront} />
                </Container>
                <Container>
                    <SubTitleWithSpace>Side view</SubTitleWithSpace>
                    <FileSelector setImage={setImageSide} imageUrl={imageUrlSide} />
                </Container>
            </MainContainer>
        </>
    );
}





export default Document;

