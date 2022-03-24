import React from 'react';
import Hoc from '../../base/Hoc'
import TopNav from './TopNav'

function LandingPage() {

    return (
        <>
            <TopNav />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error exercitationem neque quos nisi aspernatur, nemo ex fugiat nesciunt est,
            molestiae laboriosam vero ad deserunt quas quisquam eos aliquam totam repudiandae.
        </>
    )
}

const LandingPageHoc = Hoc(LandingPage);
export default LandingPageHoc;