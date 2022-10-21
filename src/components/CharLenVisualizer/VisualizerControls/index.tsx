import * as React from 'react';
import styled, {css} from 'styled-components';

interface props {
    number: number | null;
    increment: () => void;
    decrement: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNewValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VisualizerControls: React.FC<props> = (props: props) => {
    return (
        <ControlsContainer>
            <VisualizerArrow onClick={props.decrement} />
            <VisualizerNumber
                type="number"
                value={typeof props.number === 'number' ? props.number : ''}
                onChange={props.handleOnChange}
                onBlur={props.handleNewValue}
            />
            <VisualizerArrow more onClick={props.increment} />
        </ControlsContainer>
    );
};

const showMore = css`
    &:before {
        content: '>';
    }
`;

const VisualizerArrow = styled.a<{more?: boolean}>`
    display: block;
    position: relative;
    height: 5rem;
    width: 5rem;
    border: 0.01rem solid ${(props) => props.theme.colors.mainFontLight};
    border-radius: 8px;
    cursor: pointer;

    &:before {
        content: '<';
        position: absolute;
        top: 50%;
        left: 50%;
        color: ${(props) => props.theme.colors.mainFontLight};
        font-size: 2.3rem;
        font-family: ${(props) => props.theme.fonts.mainFont};
        text-align: center;
        transform: translateY(-50%) translateX(-50%);
        font-weight: lighter;
    }

    ${(props) => props.more && showMore}
`;

const VisualizerNumber = styled.input`
    font-size: 3.5rem;
    font-family: ${(props) => props.theme.fonts.mainFont};
    display: block;
    max-width: 24rem;
    margin: 0 12px;
    height: 5rem;
    padding: 0;
    outline: 0;
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
    font-weight: lighter;
    color: ${(props) => props.theme.colors.mainFontLight};
    text-align: center;
    background: transparent;

    @media (max-width: 768px) {
        max-width: 40vw;
    }
`;

const ControlsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 6vh auto 0;
`;
