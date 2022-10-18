import React from 'react';
import {Helmet} from 'react-helmet';

const GlobalHelmet = () => (
    <Helmet>
        <title>charlenvisualizer</title>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');`}</style>
    </Helmet>
);

export default GlobalHelmet;
