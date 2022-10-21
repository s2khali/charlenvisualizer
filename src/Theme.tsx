import {DefaultTheme} from 'styled-components';

// https://dribbble.com/shots/6981919-Color-Palette-01

const theme: DefaultTheme = {
    colors: {
        mainBackground: '#f8fdfd',
        mainBackgroundHover: '',
        mainBorderColor: 'rgba(0, 0, 0, 0.12)',
        mainContainerBackground: '#ffffff',
        mainLightContainerBackground: '#2e2e2e',
        mainDarkOutline: '#2c2c2c',
        mainDarkButtonBack: '#1e1e1e',
        mainDarkButtonHover: '#4a4a4a',
        mainDarkBorderHover: '#6e6666',
        mainAccent: '#19cbba',
        mainAccent2: '#18daba',
        mainAccent3: '#25bbad',
        mainFont: '#4a4a4a',
        mainFontLight: '#12b5a5',
        mainFontHover: '#ffffff',
        mainStepLight: '#c3c3c3',
        mainStepLightBorder: '#a3a3a3',
        mainStepLightFont: '#f3f3f3',
    },
    fonts: {
        mainFont: "'Montserrat', sans-serif",
        secondaryFont: '',
    },
    mainShadow: '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.19)',
    lightShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
};

export {theme};
