import React from 'react';
import MapView from "./map-view";
import Form from "./form";

const ContactUSContent = ({socialMedias, addresses, officeTitle, officeSubTitle, contactUsTitle, contactUsSubTitle}) => {
    const mainOffice =  addresses.filter(address => address.name=='Main Office')[0];
    
    return (
        <>
        <div>
            <Form mainOffice={mainOffice} title={contactUsTitle} subTitle={contactUsSubTitle} socialMedias={socialMedias}/>
            <MapView offices={addresses} title={officeTitle} subTitle={officeSubTitle} socialMedias={socialMedias}/>
        </div>

        </>
    );
}

export default ContactUSContent;