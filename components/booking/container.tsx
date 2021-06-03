import React, { useState } from 'react';
import Tabs from "../tab-forms/tab";
import styled from "styled-components";
import OnDemand from "./on-demand/";
import Rental from "./rental/";
import OutStation from "./out-station";
import Delivery from "./delivery/";

const ContainerWrapper = styled("div")`
position:absolute;
top:0px;
margin: 20px;
`;

const ChildrenContainer = styled("div")`
border-top: 5px solid #EFF2F5;
padding:5px 0px;
`;


const Container = () => {
    const [selectedContent, setSelectedContent] = useState("demand");
    return (
        <ContainerWrapper>
            <Tabs
                setSelectedContent={setSelectedContent}
                contentView={<ChildrenContainer>
                    {
                        selectedContent == "rental" ?
                            <Rental /> :
                            selectedContent == "out-station" ?
                                <OutStation /> :
                                selectedContent == "delivery" ?
                                    <Delivery /> :
                                    <OnDemand />

                    }

                </ChildrenContainer>} />
        </ContainerWrapper>
    );
}

export default Container;