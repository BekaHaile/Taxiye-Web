import React from 'react';
import styled from "styled-components";
import {DefaultSection} from "../../section";
import Content from "./content";
import Popular from "./popular";

const Container = styled("div")`
display:flex;
width:100%;
gap:60px;
`;

const ArticleContent = ({article, featured}) => {
   
    return(
        <>
        <DefaultSection>
            <Container>
                <Content article={article}/>
                <Popular articles={featured}></Popular>

            </Container>

        </DefaultSection>
        </>
    );
}

export default ArticleContent;