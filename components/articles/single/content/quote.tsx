import React from 'react';
import styled from "styled-components";

const Container = styled("div")`
width: 705px;
margin:auto;
border-top: 1px solid #A02167;
border-bottom: 1px solid #A02167;
margin-top:30px;
`;

const QuoteText = styled("h3")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 28px;
color: #2A2A2A;
padding:28px 0px;
`;


const Quote = ({ quote }) => {
    return (
        <>
        <Container>
            <QuoteText>{quote}</QuoteText>
        </Container>


        </>
    );
}

export default Quote;