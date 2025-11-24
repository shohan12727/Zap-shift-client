import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
        </div>
    );
};

export default Home;