import React from 'react';
import styled from "styled-components";
import SearchField from "../search";
import Card from "./card";


const Container = styled("div")`

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

const Search = ({articles}) => {
    return (
        <>
            <Container>
                <SearchField />
                <Title>Popular Posts</Title>
                {articles.map((article) => (

                    <Card key={article.date} article={article} />

                ))}

            </Container>
        </>
    );
}

export default Search;