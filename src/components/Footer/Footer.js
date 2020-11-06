import React from 'react'
import { Button, ButtonLink, colorTheme, SectionBoldTitle, SectionSmallText } from '../../globalStyles'
import { FooterContainer, FooterRow, FooterContainerRow, FooterSection, FooterLogoIcon, FooterSocialLink, FooterFacebookIcon, FooterYoutubeIcon, FooterTwitterIcon, FooterPinterestIcon, FooterInstagramIcon, FooterColumn, FooterList, FooterNavList, FooterLinks, FooterForm, FooterFormInput, FooterIcon, FooterCopyright, FooterLogo } from './Footer.styles'

function Footer({
    headLine,
    button,
}) {
    return (
        <FooterSection>
            <FooterRow background>
                <FooterContainer>
                    <FooterContainerRow>
                        <SectionBoldTitle fontBig fontSmall center style={{
                            width: '60%'
                        }}>
                            {headLine}
                        </SectionBoldTitle>
                        <Button colorButton marginTop>
                            <ButtonLink to='/get-started' style={{
                                color: `${(colorTheme.primaryBrightRed)}`
                            }}>
                                {button}
                            </ButtonLink>
                        </Button>
                    </FooterContainerRow>
                </FooterContainer>
            </FooterRow>
            <FooterRow>
                <FooterContainer>
                    <FooterContainerRow reverse>
                        <FooterColumn reverse>
                            <FooterCopyright>
                                Copyright 2020. All Right Reserved
                            </FooterCopyright>
                            <FooterLogo to='/'>
                                <FooterLogoIcon/>
                            </FooterLogo>
                            <FooterSocialLink>
                                <FooterIcon to='/'>
                                    <FooterFacebookIcon/>
                                </FooterIcon>
                                <FooterIcon to='/'>
                                    <FooterYoutubeIcon/>
                                </FooterIcon>
                                <FooterIcon to='/'>
                                    <FooterTwitterIcon/>
                                </FooterIcon>
                                <FooterIcon to='/'>
                                    <FooterPinterestIcon/>
                                </FooterIcon>
                                <FooterIcon to='/'>
                                <FooterInstagramIcon/>
                                </FooterIcon>
                            </FooterSocialLink>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterList>
                                <FooterNavList>
                                    <FooterLinks to='/home'>Home</FooterLinks>
                                    <FooterLinks to='/pricing'>Pricing</FooterLinks>
                                    <FooterLinks to='/products'>Products</FooterLinks>
                                    <FooterLinks to='/about-us'>About Us</FooterLinks>
                                </FooterNavList>
                                <FooterNavList>
                                    <FooterLinks to='/careers'>Careers</FooterLinks>
                                    <FooterLinks to='/community'>Community</FooterLinks>
                                    <FooterLinks to='/privacy-policy'>Privacy Policy</FooterLinks>
                                </FooterNavList>
                            </FooterList>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterForm>
                                <FooterFormInput name='email' type='email' placeholder='Updates in your inbox'/>
                                <Button>
                                    <ButtonLink to='/get-started'>
                                        Go
                                    </ButtonLink>
                                </Button>
                            </FooterForm>
                            <FooterCopyright displayNone>
                                Copyright 2020. All Right Reserved
                            </FooterCopyright>
                        </FooterColumn>
                    </FooterContainerRow>
                </FooterContainer>
            </FooterRow>
            <FooterRow background style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            Challenge by:<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={{
                textDecoration: 'none',
                color: '#fff'
            }}>Frontend Mentor</a>
            Coded by:<a href="https://github.com/omnuirniinngin" style={{
                textDecoration: 'none',
                color: '#fff'
            }}>Niño Muring</a>
            </FooterRow>
        </FooterSection>
    )
}

export default Footer
