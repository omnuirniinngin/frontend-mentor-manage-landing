import styled from 'styled-components'
import { colorTheme, Container, Button } from '../../globalStyles'

export const Section = styled.div`
    width: 100%;
    position: relative;
    padding: 100px 0;
    @media (max-width: 800px){
        padding-top: 0;
        display: block;
    }
`

export const SectionContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 800px){
        display: flex;
        flex-direction: column-reverse;
    }
`
export const SectionColumn = styled.div`
    display: flex;
    align-items: center;
`
export const SectionIntro = styled.div`
    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SectionBigText = styled.h1`
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 20px;
    color: ${colorTheme.primaryDarkBlue};

    @media (max-width: 800px){
        text-align: center;
    }
    @media (max-width: 500px){
        font-size: 3.2rem;
    }
    @media (max-width: 375px){
        font-size: 2rem;
    }
`
export const Illustration = styled.img`
    width: 100%;
    @media(max-width: 800px){
        margin-top: 80px;
    }
`

export const SectionButton = styled(Button)`
    ${Button}
`
export const Background = styled.img`
    position: absolute;
    width: 60%;
    right: -20%;
    top: -40%;
    z-index: -1;
    

    @media (max-width: 1440px){
        top: -5%;
        width: 50%;
        right: -10%;
    }
    @media (max-width: 800px){
        top: -10%;
        width: 100%;
        right: -10%;
    }
`