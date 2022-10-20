import * as React from 'react';
import {VisualizerControls} from './VisualizerControls';
import {useState} from 'react';
import {Visualizer} from './Visualizer';

export const CharLenVisualizer: React.FC = () => {
    const [charlen, setCharlen] = useState(5);
    const [text, setText] = useState('Lorem');

    const increment = () => {
        setCharlen(charlen + 1);
        handleIncrementChange(true);
    };

    const decrement = () => {
        if (charlen > 1) {
            setCharlen(charlen - 1);
            handleIncrementChange(false);
        }
    };

    // Handles when you're typing in the input
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (typeof parseInt(value) === 'number' && parseInt(value) >= 0) {
            setCharlen(parseInt(value));
        } else {
            setCharlen(0);
        }
    };

    // Handles when focus is lost and we update the text area
    const handleNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (typeof parseInt(value) === 'number' && parseInt(value) >= 0) {
            setCharlen(parseInt(value));
        } else {
            setCharlen(0);
        }
    };

    const handleIncrementChange = (add: boolean) => {
        if (add) {
            // Select random Char and add it to value
            setText(text + `t`);
        } else {
            setText(text.slice(0, -1));
        }
    };

    const handleValueChange = (num: number) => {
        const generatedText = 'test';
        setText(generatedText);
    };

    return (
        <>
            <VisualizerControls
                number={charlen}
                increment={increment}
                decrement={decrement}
                handleOnChange={handleOnChange}
                handleNewValue={handleNewValue}
            />
            <Visualizer text={text} />
        </>
    );
};
