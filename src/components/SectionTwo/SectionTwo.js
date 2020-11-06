import React from 'react'
import { SectionBoldTitle, SectionSmallText } from '../../globalStyles'
import { Section, SectionContainer, SectionContent, SectionColumn, Background, SectionContentWrapper, SectionContentNumber, SectionContentOrder } from './SectionTwo.styles'
import background from '../images/bg-tablet-pattern.svg'

function SectionTwo({
    headLine,
    subHeadline,
    content,
    start
}) {
    return (
        <Section>
            <SectionContainer>
                <SectionColumn margin>
                    <SectionContent>
                        <SectionBoldTitle start={start} fontBig padRight fontColor>{headLine}</SectionBoldTitle>
                        <SectionSmallText padRight reCenter >{subHeadline}</SectionSmallText>
                    </SectionContent>
                </SectionColumn>
                <SectionColumn>
                    {
                        content.map(({id, title, description}) =>
                        <SectionContentWrapper key={id}>
                            <SectionContentOrder>
                                <SectionContentNumber>
                                    {id}
                                </SectionContentNumber>
                                <SectionBoldTitle background fontColor>
                                    {title}
                                </SectionBoldTitle>
                            </SectionContentOrder>
                            <SectionContent start={start}>
                                <SectionSmallText left start={start}>
                                    {description}
                                </SectionSmallText>
                            </SectionContent>
                        </SectionContentWrapper>
                        )
                    }
                </SectionColumn>
                <Background src={background}/>
            </SectionContainer>
        </Section>
    )
}

export default SectionTwo
