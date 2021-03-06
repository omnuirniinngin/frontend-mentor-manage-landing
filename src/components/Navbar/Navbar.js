import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavBlur, NavButton, NavContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from './Navbar.styles'
import mobileMenu from '../images/icon-hamburger.svg'
import mobileClose from '../images/icon-close.svg'
import { ButtonLink } from '../../globalStyles';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton ] = useState(true);

    const handleClick = () => {
        if(!click){
            setClick(!click)
            document.getElementById('content').style.opacity = '0.5';
        }else{
            document.getElementById('content').style.opacity = '1';
            setClick(!click)
        }
        
    };
    // const closeMobileMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 800) {
        setButton(false);
        } else {
            document.getElementById('content').style.opacity = '1';
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div style={{
            position: 'sticky',
            top: '0',
            zIndex: '999'
        }}>
            <div style={{
            position: 'absolute',
            width: '100%',
            height: '80px'
        }}>
            <Nav>
                <NavBlur/>
                    <NavContainer>
                        <NavLogo to='/'>
                            <NavIcon/>
                        </NavLogo>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/pricing'>
                                    Pricing
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/product'>
                                    Product
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about-us'>
                                    About Us
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/careers'>
                                    Careers
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/community'>
                                    Community
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <ButtonLink to='/get-started'>
                                Get Started
                            </ButtonLink>
                        </NavButton>
                        <MobileIcon onClick={handleClick}>
                            { click ? 
                            <img src={mobileClose} alt="icon-close"/> 
                            : <img src={mobileMenu} alt="icon-hamburger"/>
                            }
                        </MobileIcon>
                    </NavContainer>
                </Nav>
            </div>
        </div>
    )
}

export default Navbar
