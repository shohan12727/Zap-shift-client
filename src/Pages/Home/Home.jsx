import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Brands from "./Brands";
import Information from "./Information";
import Reviews from "./Reviews";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <Information></Information>
      <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};

export default Home;
