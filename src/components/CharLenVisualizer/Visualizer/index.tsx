import * as React from 'react';
import styled from 'styled-components';

export const Visualizer: React.FC<{text: string}> = ({text}) => {
    return <VisualizerTextArea contentEditable>{text}</VisualizerTextArea>;
};

const VisualizerTextArea = styled.div`
    width: fit-content;
    min-width: 0;
    max-width: 96vw;
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
    color: ${(props) => props.theme.colors.mainStepLightFont};
    font-family: 'Montserrat', sans-serif;

    &:focus {
        border: 0;
        outline: 0;
    }
`;

// const VisualizerTextArea = styled(TextareaAutosize)({
//     width: 'auto',
//     minWidth: 0,
//     maxWidth: '96vw',
//     margin: '8vh auto 2vh',
//     display: 'block',
//     padding: '6px 18px',
//     border: 0,
//     outline: 0,
//     background: theme.colors.mainAccent3,
//     borderRadius: '8px',
//     resize: 'none',
//     cursor: 'default',
//     fontSize: '1.2rem',
//     color: theme.colors.mainStepLightFont,
//     fontFamily: "'Montserrat', sans-serif",
//
//     '&::focus': {
//         border: 0,
//         outline: 0,
//     },
// });
