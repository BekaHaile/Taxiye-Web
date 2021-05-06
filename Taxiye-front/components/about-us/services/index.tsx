import React from "react";
import { DefaultSection, SectionTitle, CenteredText } from "../../section";
import styled from "styled-components";
import DeviceImage from "./image";


const ServiceContent = () => {
    return (
        <>
            <DefaultSection>
                <SectionTitle>
                    Why ride with Taxiye
                </SectionTitle>
                <CenteredText>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor.
                </CenteredText>
                <DeviceImage/>

            </DefaultSection>
        </>
    );
}

export default ServiceContent;