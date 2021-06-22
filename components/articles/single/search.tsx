import React from 'react';
import { SecondaryInputs } from "../../form/inputs";
import styled from "styled-components";


const Container = styled("div")`
width: 350px;
height:40px;
`;
const SecondaryInputsWithShadow = styled(SecondaryInputs)`
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;



const Search = () => {
    return (
        <>
            <Container>
                <SecondaryInputs
                    id="location"
                    placeholder="Search..."
                    icon={require("../../../assets/icons/search.svg")}
                    shadow={true}
                />
            </Container>
        </>
    );
}

export default Search;