import React from 'react';
import MapView from "./map-view";
import Form from "./form";

const ContactUSContent = ({socialMedias, addresses, officeTitle, officeSubTitle, contactUsTitle, contactUsSubTitle, contactUsContent, getDirectionButton}) => {
    const mainOffice =  addresses.filter(address => address.name=='Main Office')[0];
    
    return (
        <>
        <div>
            <Form contactUsContent={contactUsContent} mainOffice={mainOffice} title={contactUsTitle} subTitle={contactUsSubTitle} socialMedias={socialMedias}/>
            <MapView getDirectionButton={getDirectionButton} offices={addresses} title={officeTitle} subTitle={officeSubTitle} socialMedias={socialMedias}/>
        </div>

        </>
    );
}

export default ContactUSContent;