import React from 'react'
import { ButtonLink, SectionSmallText } from '../../globalStyles'
import { SectionButton, Illustration, Section, SectionBigText, SectionContainer, SectionColumn, Background, SectionIntro} from './SectionOne.styles'
import background from '../images/bg-tablet-pattern.svg'

function SectionOne({
    headLine,
    subHeadline,
    img,
    alt,
    padRight,
    center
}) {
    return (
        <Section>
            <SectionContainer>
                <SectionColumn>
                    <SectionIntro>
                        <SectionBigText>
                        {headLine}
                        </SectionBigText>
                        <SectionSmallText padRight center>
                        {subHeadline}
                        </SectionSmallText>
                        <SectionButton>
                            <ButtonLink to='/get-started'>
                                Get Started
                            </ButtonLink>
                        </SectionButton>
                    </SectionIntro>
                </SectionColumn>
                <SectionColumn>
                    <Illustration src={img} alt={alt}/>
                </SectionColumn>
                <Background src={background}/>
            </SectionContainer>
            
        </Section>
    )
}

export default SectionOne
