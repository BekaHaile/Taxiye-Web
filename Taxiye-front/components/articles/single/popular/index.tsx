import React from 'react';
import styled from "styled-components";
import Card from "./card";


const Container = styled("div")`
min-width: 350px;
`;
const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
margin-top:60px;
color: #000000;
`;
const NoContent = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
margin-top:60px;
color: #000000;
text-align:center;
`;

const Search = ({ articles, SearchingComponent }) => {
    return (
        <>
            <Container>
                {SearchingComponent}
                <Title>Popular Posts</Title>

                {
                    Array.isArray(articles) && !articles.length ?
                        <NoContent>No content</NoContent> :
                        articles.map((article) => (

                            <Card key={article.date} article={article} />

                        ))}

            </Container>
        </>
    );
}

export default Search;