import * as React from 'react';
import styled from 'styled-components';

export const Visualizer: React.FC<{text: string}> = ({text}) => {
    return <VisualizerTextArea contentEditable>{text}</VisualizerTextArea>;
};

const VisualizerTextArea = styled.div`
    width: fit-content;
    min-width: 0;
    max-width: 60vw;
    margin: 8vh auto 2vh;
    display: block;
    padding: 6px 18px;
    border: 0;
    outline: 0;
    background: ${(props) => props.theme.colors.mainAccent3};
    border-radius: 8px;
    resize: none;
    cursor: default;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.mainFontHover};
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s;

    &:focus {
        border: 0;
        outline: 0;
    }

    @media (max-width: 768px) {
        max-width: 94vw;
    }
`;
