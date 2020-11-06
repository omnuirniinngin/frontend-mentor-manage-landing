import React from 'react'
import {footer, sectionOne, sectionThree, sectionTwo} from './Data'
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from './SectionThree/SectionThree';
import Footer from './Footer/Footer';

function LandingPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <SectionOne {...sectionOne}/>
            <SectionTwo {...sectionTwo}/>
            <SectionThree {...sectionThree}/>
            <Footer {...footer}/>
        </div>
    )
}

export default LandingPage
