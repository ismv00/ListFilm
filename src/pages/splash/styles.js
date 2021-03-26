import styled from 'styled-components/native'; 

export const Container = styled.View`
    background-color: #000;
    flex: 1;
    justify-content: center;
    align-Items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    position: absolute;
    top: 180px;
    width: 80%;
    height: 40%;
`;

export const FooterLogo = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0px;
`;
