import * as React from 'react';
import {TextareaAutosize, styled} from '@mui/material';
import {theme} from '../../../Theme';

export const Visualizer: React.FC = () => {
    return <VisualizerTextArea defaultValue="Lorem" readOnly={true} />;
};

const VisualizerTextArea = styled(TextareaAutosize)({
    width: 'auto',
    minWidth: 0,
    maxWidth: '96vw',
    margin: '8vh auto 2vh',
    display: 'block',
    padding: '6px 18px',
    border: 0,
    outline: 0,
    background: theme.colors.mainAccent3,
    borderRadius: '8px',
    resize: 'none',
    cursor: 'default',
    fontSize: '1.2rem',
    color: theme.colors.mainStepLightFont,
    fontFamily: "'Montserrat', sans-serif",

    '&::focus': {
        border: 0,
        outline: 0,
    },
});
