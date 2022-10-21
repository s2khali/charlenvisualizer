import * as React from 'react';
import {VisualizerControls} from './VisualizerControls';
import {useState} from 'react';
import {Visualizer} from './Visualizer';
import {VisualizerNote} from './styles';

export const CharLenVisualizer: React.FC = () => {
    // TODO: Button hold functionality

    const maxCharLen = 50000;
    const generateRandomString: (length: number, randomString?: string) => string = (
        length: number,
        randomString = '',
    ) => {
        randomString += Math.random().toString(20).substr(2, length);
        if (randomString.length > length) return randomString.slice(0, length);
        return generateRandomString(length, randomString);
    };

    const [charlen, setCharlen] = useState<null | number>(5);
    const [text, setText] = useState(generateRandomString(5));

    const increment = () => {
        if (typeof charlen == 'number' && charlen < maxCharLen) {
            setCharlen(charlen + 1);
            handleIncrementChange(true);
        }
    };

    const decrement = () => {
        if (typeof charlen == 'number' && charlen > 1) {
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
            setCharlen(null);
        }
    };

    // Handles when focus is lost and we update the text area
    const handleNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (typeof parseInt(value) === 'number' && parseInt(value) >= 0 && parseInt(value) <= maxCharLen) {
            setCharlen(parseInt(value));
            setText(generateRandomString(value));
        } else if (parseInt(value) > maxCharLen) {
            setCharlen(maxCharLen);
            setText(generateRandomString(maxCharLen));
        } else {
            setCharlen(1);
            setText(generateRandomString(1));
        }
    };

    const handleIncrementChange = (add: boolean) => {
        if (add) {
            // Select random Char and add it to value
            const newChar = generateRandomString(1);
            setText(text + newChar);
        } else {
            setText(text.slice(0, -1));
        }
    };

    return (
        <>
            <VisualizerNote>
                Type in a number below (max: {maxCharLen}), or use the buttons to change the character length
            </VisualizerNote>
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
