import React from 'react';
import Hoc from '../../base/Hoc'
import TopNav from './TopNav';
import CaruselSection from './CaruselSection';

function LandingPage() {

    return (
        <>
            <TopNav />
            <CaruselSection />
        </>
    )
}

const LandingPageHoc = Hoc(LandingPage);
export default LandingPageHoc;