import React from 'react';
import styled from "styled-components";

const Image = styled("img")`
margin:auto;
display: block;
`;

const Loading = () => {

    return (
        <>
            <Image src={require("../../../assets/images/searching.gif")} />

        </>
    );
}

export default Loading;