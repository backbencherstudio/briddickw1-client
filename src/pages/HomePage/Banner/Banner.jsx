import React from "react";
import heroBanner from "../../../assets/image/hero-banner.png";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="max-w-[1350px] h-full px-[15px] py-[150px] mx-auto flex flex-col items-start justify-center gap-4">
          <h1 className="text-[56px] text-white font-bold leading-[130%]">
            Find Top Real Estate Agents. No Commitment.
          </h1>
          <p className="text-white text-[18px] font-normal leading-[160%] mb-8">We analyze hundreds of local agents and find the best to compete in your area.</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
