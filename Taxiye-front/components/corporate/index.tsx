import React from 'react';
import SafetySection from './safety';
import InfoSection from './info';
import ExpenseSection from './expense-tracker';
import ArchitectureSection from './architecture';

const CorporateContent = ({data}) => {
    return(
        <>
        <InfoSection backgroundImage={data.corporatePage.infoSectionImage} title={data.corporatePage.infoSectionTitle} subTitle={data.corporatePage.infoSectionSubTitle} contents={data.corporateInfos}/>
        <SafetySection title={data.corporatePage.safetySectionTitle} subTitle={data.corporatePage.safetySectionSubTitle} contents={data.corporateSafeties}/>
        <ArchitectureSection title={data.corporatePage.architectureSectionTitle} subTitle={data.corporatePage.architectureSectionSubTitle} contents={data.corporateArchitectures}/>
        <ExpenseSection title={data.corporatePage.expenseTrackerSectionTitle} subTitle={data.corporatePage.expenseSectionSubTitle} contents={data.corporateExprenses}/>
        </>
    );
}

export default CorporateContent;