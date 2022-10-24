import styled from 'styled-components';

export const VisualizerNote = styled.span`
    display: block;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.mainFont};
    color: ${(props) => props.theme.colors.mainFontLight};
    margin: 36px auto 0;
`;
