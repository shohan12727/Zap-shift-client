import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import Services from './Services';
import Brands from './Brands';
import Information from './Information';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <Information></Information>
        </div>
    );
};

export default Home;