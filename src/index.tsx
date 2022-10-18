/**
 * Our development page.
 *
 * @author Ben Schnell <schnell@fitmentindustries.com>
 */

import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from './Theme';
import {Logo} from './components/Logo';
import GlobalHelmet from './GlobalHelmet';

const App: FunctionComponent = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <GlobalHelmet />
                <Logo />
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
