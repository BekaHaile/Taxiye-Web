import React from 'react';
import styled from "styled-components";
import SearchField from "../search";
import Card from "./card";


const Container = styled("div")`

`;

const Articles = [
    {
        title: "Lorem ipsum dolor sit, amet consectetur adipi ",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
        author: "Neguse B.",
        date: "June 23, 2020",
        image: require("../../../../assets/Data/images/articles/news_2.jpg"),
    },
    {
        title: "Lorem ipsum dolor sit, amet consectetur adipi ",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
        author: "Neguse B.",
        date: "June 24, 2020",
        image: require("../../../../assets/Data/images/articles/news_3.jpg"),
    },
    {
        title: "Lorem ipsum dolor sit, amet consectetur adipi ",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
        author: "Neguse B.",
        date: "June 25, 2020",
        image: require("../../../../assets/Data/images/articles/news_4.jpg"),
    },

];

const Search = () => {
    return (
        <>
            <Container>
                <SearchField />
                {Articles.map((article) => (

                    <Card key={article.date} article={article} />

                ))}

            </Container>
        </>
    );
}

export default Search;