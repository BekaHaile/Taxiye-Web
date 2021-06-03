import React, {useState} from 'react';
import styled from "styled-components";
import {SecondaryTextArea} from "../../form/input-fields/primary-textarea";
import FileSelector from "./file-selector";

const Text = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #444444;
`;



const Title = styled(Text)`
font-weight: bold;
padding-bottom:20px;

`;
const Container = styled("div")`
padding:15px;
border-bottom: 5px solid #EFF2F5;
`;
const FlexContainer = styled("div")`
display:flex;
justify-content:space-between;
`;
const CustomSecondaryTextArea = styled(SecondaryTextArea)`
height:100px;
max-width:320px;

`;




const Item = () => {
    const [imageUrl, setImage] = useState("");
    return (
        <>
            <Container>
                <Title>What do you need?</Title>
                <FlexContainer>
                    <CustomSecondaryTextArea
                    placeholder="Tell us what you need to be delivered here. You can also upload a photo of the product."
                    id=""
                    label=""
                    />
                    <FileSelector setImage={setImage} imageUrl={imageUrl} />
                </FlexContainer>
            </Container>
        </>
    );
}

export default Item;