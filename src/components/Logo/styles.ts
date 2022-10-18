import styled from 'styled-components';

export const LogoHeader = styled.h1`
    font-family: ${(props) => props.theme.fonts.mainFont};
    font-size: 2.3rem;
    font-weight: lighter;
    color: ${(props) => props.theme.colors.mainFontLight};
    margin: 24px 0;
    text-align: center;
    letter-spacing: 0.2vw;
`;
