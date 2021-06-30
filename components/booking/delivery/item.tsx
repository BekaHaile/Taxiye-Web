import React, { useEffect } from 'react';
import styled from "styled-components";
import store from '../../../redux/store';
import { SecondaryTextArea } from "../../form/input-fields/primary-textarea";
import FileSelector from "./file-selector";
import { changeDeliveryComment, uploadDeliveryItemImages, removeDeliveryItemImages } from "../../../redux/actions/booking";
import { useSelector } from 'react-redux';
import theme from '../../../theme/main';

const Text = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
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
const ResponsiveFlexContainer = styled(FlexContainer)`
overflow-x:auto;
padding-top:20px;
gap:10px;
justify-content:start;
`;
const CustomSecondaryTextArea = styled(SecondaryTextArea)`
height:100px;
max-width:320px;

`;
const ImagePreview = styled("img")`
width:100px;
height:100px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
border-radius: 5px;

`;

const CloseButton = styled("div")`
width: 12px;
height: 12px;
background-color: #bbb;
border-radius: 50%;
position:absolute;
display: inline-block;
text-align:center;
right:-5px;
top:-5px;
background: ${theme.colors.primary};
color:#fff;
font-weight:bold;
font-size:8px;
cursor:pointer;

`;
const ImageContainer = styled("div")`
position:relative;
`;




const Item = () => {
    const images = useSelector((state) => state["booking"]["delivery"]["images"]);
    const comment = useSelector((state) => state["booking"]["delivery"]["comment"]);
    useEffect(() => {
        console.log(images);
    }, [JSON.stringify(images)]);
    return (
        <>
            <Container>
                <Title>What do you need?</Title>
                <FlexContainer>
                    <CustomSecondaryTextArea
                        value={comment}
                        action={(event) => {
                            store.dispatch(changeDeliveryComment(event.target.value));
                        }}
                        placeholder="Tell us what you need to be delivered here. You can also upload a photo of the product."
                        id=""
                        label=""
                    />
                    <FileSelector action={(data) => {
                     
                        for (var i = 0; i < data.length; ++i) {
                            var binaryData = [];
                            binaryData.push(data[i]);
                            store.dispatch(uploadDeliveryItemImages(binaryData));
                        }
                        

                    }} />

                </FlexContainer>{
                    images && <ResponsiveFlexContainer>
                        {
                            images.map((image, index) =>
                                <ImageContainer>
                                    <ImagePreview src={URL.createObjectURL(new Blob(image))} />
                                    <CloseButton onClick={() => {
                                        
                                        store.dispatch(removeDeliveryItemImages(index));
                                    }}> x </CloseButton>
                                </ImageContainer>
                            )
                        }


                    </ResponsiveFlexContainer>
                }
            </Container>
        </>
    );
}

export default Item;