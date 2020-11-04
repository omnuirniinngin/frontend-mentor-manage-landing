import React from 'react'
import {sectionOne, sectionTwo} from './Data'
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionOne from "./SectionOne/SectionOne";

function LandingPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <SectionOne {...sectionOne}/>
            <SectionTwo {...sectionTwo}/>
        </div>
    )
}

export default LandingPage
