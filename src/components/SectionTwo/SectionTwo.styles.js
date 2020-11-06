import styled from 'styled-components'
import { Container, colorTheme } from '../../globalStyles'

export const Section = styled.div`
    width: 100%;
    padding: 100px 0;

    @media (max-width: 800px){
        padding: 0;
    }
`
export const SectionContainer = styled(Container)`
    display: flex;

    @media (max-width: 800px){
        flex-direction: column;
    }
    ${Container};
`
export const SectionColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    @media (max-width: 800px){
        margin-bottom: ${({margin}) => (margin ? '50px' : 0)};
    }
`
export const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 800px){
        align-items: ${({start}) => (start ? 'flex-start' : 'center')};
    }
`
export const SectionContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const SectionContentOrder = styled.div`
    display: flex;
    align-items: center;
`
export const SectionContentNumber = styled.span`
    font-size: 1.4rem;
    margin-right: 20px;
    display: inline;
    padding: 1px 25px 6px 25px;
    color: #fff;
    border-radius: 50px;
    background-color: ${colorTheme.primaryBrightRed}; 

    @media (max-width: 800px){
        margin-right: 10px;

        ::before{
            content:'';
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 2.5rem;
            background-color: #FFF0EC;
            display: block;
        }
    }
`

export const Background = styled.img`
    position: absolute;
    width: 50%;
    left: -20%;
    z-index: -1;
    margin-top: 15%;

    @media (max-width: 1440px){
        width: 50%;
    }
    @media (max-width: 800px){
        left: 0;
        margin-top: -100%;
        margin-left: 50%;
        width: 100%;
    }
`