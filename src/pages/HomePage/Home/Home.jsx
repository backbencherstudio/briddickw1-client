import React from "react";
import "../../../styles/Styles.css";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Find Top Real Estate Agents.
        </title>
      </Helmet>
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
