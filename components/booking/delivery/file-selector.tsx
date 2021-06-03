import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../form/buttons/primary-button";

const Card = styled("div")`
width:100px;
height:100px;
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
text-align:center;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: center;

/* Black / 444 */

color: #444444;
`;

const ImagePreview = styled("img")`
width:100px;
height:100px;
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
right:-12px;
top:-12px;
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
                        document.getElementById("upload-photo").nodeValue = null;

                        ;
                    }}> <CloseIcon src={require("../../../assets/icons/close.svg")} /> </CloseButton> : null}
                {imageUrl == "" ?
                    <CenteredElement htmlFor="upload-photo">
                        Upload Photo
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
