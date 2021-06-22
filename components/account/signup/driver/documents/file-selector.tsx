import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../form/buttons/primary-button";

const Card = styled("div")`
width:150px;
height:150px;
position:relative;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
cursor: pointer;
`;
const FileSelector = styled("input")`
opacity: 0.0;

/* IE 8 */
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";

/* IE 5-7 */
filter: alpha(opacity=0);

/* Netscape or and older firefox browsers */
-moz-opacity: 0.0;

/* older Safari browsers */
-khtml-opacity: 0.0;

position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height:100%;
	
`;

const Label = styled("label")`
`;

const CenteredElement = styled(Label)`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color: #444444;
cursor: pointer;
`;

const ImagePreview = styled("img")`
width:150px;
height:150px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
border-radius: 5px;

`;

const CloseButton = styled(Button)`
height:27px;
width:27px;
padding:0px;
margin:0px;
border-radius:50%;
box-shadow:none;
position:absolute;
right:-16px;
top:-16px;
z-index:10;
`;
const CloseIcon = styled('img')`
height:24px;
width:24px;
padding:0px;
margin:0px;
transform: scale(2);
`;



const Document = ({setImage, imageUrl}) => {
    return (
        <>

            <Card>
                {imageUrl != "" ?
                    <CloseButton onClick={() => {
                        setImage("");
                        (document.getElementById("upload-photo") as HTMLLabelElement) .nodeValue = "";

                        ;
                    }}> <CloseIcon src={require("../../../../../assets/icons/close.svg")} /> </CloseButton> : null}
                {imageUrl == "" ?
                    <CenteredElement htmlFor="upload-photo">
                        + Upload
                </CenteredElement> :
                    null}
                {imageUrl != "" ? <ImagePreview src={imageUrl} /> : null}
                <FileSelector onChange={(event) => {
                    URL.revokeObjectURL(imageUrl);
                    var data = event.target.files[0];
                    var binaryData = [];
                    binaryData.push(data);
                    var url = URL.createObjectURL(new Blob(binaryData));
                    setImage(url);
                }} type="file" name="photo" id="upload-photo" />


            </Card>


        </>
    );
}



export default Document;
