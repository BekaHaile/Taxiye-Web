import React from 'react';
import SafetySection from './safety';
import InfoSection from './info';
import ExpenseSection from './expense-tracker';
import ArchitectureSection from './architecture';

const CorporateContent = () => {
    return(
        <>
        <InfoSection />
        <SafetySection />
        <ArchitectureSection />
        <ExpenseSection />
        </>
    );
}

export default CorporateContent;