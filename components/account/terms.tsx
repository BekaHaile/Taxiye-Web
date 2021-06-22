import React from "react";
import styled from "styled-components";
import colors from "../../theme/main/colors";

const AgreementContainer = styled("div")`
margin-bottom:40px;
display:flex;
justify-content:start;
text-align:start;
}
`;
const CheckBox = styled("input")`
margin:0px;
}
`;
const CheckBoxLabel = styled("label")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #444444;
padding-left:10px;
}
`;


const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-decoration-line: underline;

/* Taxiye/Purple/Main */

color: #A02167;

}
`;

const Terms = ({action, checked}) => {
    return (
        <>
            <AgreementContainer>
               
                    <CheckBox checked={checked} onChange={()=>action(!checked)}  type="checkbox" id="terms" name="interest" />
                    <CheckBoxLabel>I agree to Taxiye's</CheckBoxLabel>
                
                <LinkWithLine href="/">Terms of service</LinkWithLine>
                
            </AgreementContainer>
        </>
    );
}


export default Terms;