import React, { useState } from "react";
import FileSelector from "./file-selector";
import styled from "styled-components";

const Container = styled("div")`
margin-top:20px;
margin-bottom:60px;
`;

const Document = () => {

    const [imageUrl, setImage] = useState("");
    return (
        <>
            <Container>
                <FileSelector setImage={setImage} imageUrl={imageUrl} />
            </Container>
        </>
    );
}


export default Document;
