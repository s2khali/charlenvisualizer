import styled from 'styled-components';

export const Divider = styled.div`
    height: 1px;
    width: 92vw;
    background: ${(props) => props.theme.colors.mainFontLight};
    display: block;
    margin: 48px auto 24px;
    max-width: 762px;
`;
