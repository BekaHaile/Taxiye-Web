import React from "react";
import styled from "styled-components";
import colors from "../../theme/main/colors";
import {FlexContainer} from "./elements";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-decoration-line: underline;
color: #A02167;
}
`;
const Label = styled("label")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #444444;
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