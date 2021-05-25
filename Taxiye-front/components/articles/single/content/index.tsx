import React from 'react';
import styled from "styled-components";
import Header from "./header";
import ParagraphText from "./paragraph-text";
import Quote from "./quote";
import Media from "./media";


const Container = styled("div")`
flex: 1;
`;


const Article = ({article}) => {
    const articleBody = article.body;
    const articleHeader = article.header;
    
    return (
        <>
            <Container>
                <Header header={articleHeader} />
                {articleBody.map((body, index) => (
                    body.__typename === "ComponentTextMedia" ?
                        <Media key={index} media={body} /> :
                        body.__typename === "ComponentTextQuote" ?
                            <Quote key={index} quote={body.content} /> :

                            <ParagraphText key={index} paragraph={body.content} />
                ))}

            </Container>
        </>
    );
}

export default Article;