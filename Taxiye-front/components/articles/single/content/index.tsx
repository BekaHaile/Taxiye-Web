import React from 'react';
import styled from "styled-components";
import Header from "./header";
import ParagraphText from "./paragraph-text";
import Quote from "./quote";
import Media from "./media";


const Container = styled("div")`
padding-right:60px;
flex: 1;
`;

const article = {
    header: {
        title: "Lorem ipsum dolor sit, amet consectetur adipi ",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
        author: "Neguse B.",
        date: "June 23, 2020",
        image: require("../../../../assets/Data/images/articles/frame-1233.svg"),
    },
    body: [
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },
        {
            type: "quote",
            content: "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
        },
        {
            type: "media",
            content: {
                url: require("../../../../assets/Data/images/articles/frame-1233.svg"),
                caption: "The casket of late U.S. Rep. John Lewis, a pioneer of the civil rights movement who died July 17, is carried outside the Brown Chapel A.M.E. Church, in Selma, Ala., on July 26, 2020. ",
                meta:"Christopher Aluka Berry / Reuters"
            }
        },
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },
        {
            type: "quote",
            content: "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
        },
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },
        {
            type: "paragraph",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum."
        },

    ]

};

const Search = () => {
    return (
        <>
            <Container>
                <Header header={article.header} />
                {article.body.map((body, index) => (
                    body.type === "media" ?
                        <Media key={index} media={body.content} /> :
                        body.type === "quote" ?
                            <Quote key={index} quote={body.content} /> :

                            <ParagraphText key={index} paragraph={body.content} />


                ))}

            </Container>
        </>
    );
}

export default Search;