import styled from 'styled-components'
import { Container, colorTheme } from '../../globalStyles'

export const Section = styled.div`
    width: 100%;
    padding: 100px 0;

    @media (max-width: 800px){
        padding: 50px 0;
    }
`
export const SectionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Container};
`

export const SectionSlide = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 30px 0;
    
`

export const SectionSlideWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colorTheme.neutralLightGray};
    border-radius: 10px;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8%;
`

export const Image = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -10%;
    width: 80px;
    height: 80px;
    top: -10%;
`


