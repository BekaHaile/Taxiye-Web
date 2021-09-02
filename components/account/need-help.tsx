import React from "react";
import styled from "styled-components";
import theme from "../../theme/main";
import {FlexContainer} from "./elements";

const LinkWithLine = styled("a")`
color:${theme.colors.primary};
padding-left:5px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-decoration-line: underline;
color:${theme.colors.primary};
}
`;
const Label = styled("label")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color:${theme.colors.primaryTextColor};;
}
`;
const Container = styled(FlexContainer)`
padding-right:20px;
}
`;

const Help = () => {
    return (
        <>
            <Container>
                    <Label>Need help?</Label>
                    <LinkWithLine href="/">Click here</LinkWithLine>

                </Container>
        </>
    );
}


export default Help;