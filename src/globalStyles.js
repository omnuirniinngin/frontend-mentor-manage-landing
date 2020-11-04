import styled, {createGlobalStyle} from 'styled-components';
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
        font-family: 'Be Vietnam', sans-serif;
        font-size: 16px;
    }
`;

export const colorTheme = {
    primaryBrightRed: 'hsl(12, 88%, 59%)',
    primaryDarkBlue:  'hsl(228, 39%, 23%)',
    neutralGrayishBlue: 'hsl(227, 12%, 61%)',
    neutralDarkBlue: 'hsl(233, 12%, 13%)',
    neutralPaleRed: 'hsl(13, 100%, 96%)',
    neutralLightGray: 'hsl(0, 0%, 98%)'
}

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1440px){
        padding: 0 20px;
    }
`

export const Button = styled.button`
    border-radius: 20px;
    background: ${colorTheme.primaryBrightRed};
    padding: 10px 20px;
    outline: none;
    border: none;
    cursor: pointer;
`
export const ButtonLink = styled(Link)`
    font-family: 'Be Vietnam', sans-serif;
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionSmallText = styled.p`
    font-size: 1.1rem;
    padding-right: ${({padRight}) => (padRight ? '40%' : 0) };
    text-justify: inter-word;
    margin-bottom: 20px;
    margin-left: ${({left}) => (left ? '5.2rem' : 0)};
    color: ${colorTheme.neutralGrayishBlue};

    @media (max-width: 800px){
        width: 100%;
        padding-right: 0;
        margin-left: 0;
        text-align: ${({center}) => (center ? 'center' : 'start')};
    }
    @media (max-width: 500px){
        font-size: 1rem;
    }
`

export const SectionBoldTitle = styled.p`
    font-size: ${({fontBig}) => (fontBig ? '2.5rem' : '1.3rem')};
    line-height: 1;
    margin-bottom: 20px;
    font-weight: 600;
    padding-top: 13px;
    padding-right: ${({padRight}) => (padRight ? '20%' : 0) };
    color: ${colorTheme.primaryDarkBlue};

    @media (max-width: 800px){
        text-align: ${({start}) => (start ? 'center' : 'start')};
        padding-right: 0;
    }
    @media (max-width: 500px){
        font-size: ${({fontBig}) => (fontBig ? '2.5rem' : '1.1rem')};
    }
`


export default GlobalStyle;