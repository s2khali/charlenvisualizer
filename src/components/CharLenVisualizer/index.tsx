import * as React from 'react';
import {VisualizerControls} from './VisualizerControls';
import {useState} from 'react';

export const CharLenVisualizer: React.FC = () => {
    const [charlen, setCharlen] = useState(50);

    const increment = () => {
        setCharlen(charlen + 1);
    };

    const decrement = () => {
        if (charlen > 1) {
            setCharlen(charlen - 1);
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (typeof parseInt(value) === 'number' && parseInt(value) >= 0) {
            console.log(parseInt(value));
            setCharlen(parseInt(value));
        } else {
            setCharlen(1);
        }
    };

    return (
        <>
            <VisualizerControls
                number={charlen}
                increment={increment}
                decrement={decrement}
                handleOnChange={handleOnChange}
            />
            {/*<visualizer />*/}
        </>
    );
};
