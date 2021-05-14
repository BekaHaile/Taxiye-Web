import React from 'react';
import styled from "styled-components";
import {DefaultSection} from "../../section";
import Content from "./content";
import Popular from "./popular";

const Container = styled("div")`
display:flex;
width:100%;
`;

const ArticleContent = () => {
    return(
        <>
        <DefaultSection>
            <Container>
                <Content></Content>
                <Popular></Popular>

            </Container>

        </DefaultSection>
        </>
    );
}

export default ArticleContent;