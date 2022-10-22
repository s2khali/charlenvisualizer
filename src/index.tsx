import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from './Theme';
import {Logo} from './components/Logo';
import GlobalHelmet from './GlobalHelmet';
import {CharLenVisualizer} from './components/CharLenVisualizer';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('G-GPKGNBNFBL');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App: FunctionComponent = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <GlobalHelmet />
                <Logo />
                <CharLenVisualizer />
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
