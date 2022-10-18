// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            mainBackground: string;
            mainBackgroundHover: string;
            mainBorderColor: string;
            mainContainerBackground: string;
            mainLightContainerBackground: string;
            mainDarkOutline: string;
            mainDarkButtonBack: string;
            mainDarkButtonHover: string;
            mainDarkBorderHover: string;
            mainAccent: string;
            mainAccent2: string;
            mainFont: string;
            mainFontLight: string;
            mainFontHover: string;
            mainStepLight: string;
            mainStepLightBorder: string;
            mainStepLightFont: string;
        };
        fonts: {
            mainFont: string;
            secondaryFont: string;
        };
        mainShadow: string;
        lightShadow: string;
    }
}
