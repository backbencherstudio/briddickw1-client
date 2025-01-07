import React from "react";
import Button from "../../../components/Button/Button";
import agent from '../../../assets/image/agents.png';

const Agents = () => {
  return (
    <>
      <div className="max-w-[1350px] mx-auto px-[15px] py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <div className="max-w-[694px] flex flex-col items-start justify-center gap-4">
            <h2 className="text-[#0D0D12] text-[48px] font-semibold leading-[130%]">
              Multiple proposals from top agents. You pick the best one.
            </h2>
            <p className="text-[#4A4C56] text-[18px] font-normal leading-[160%] mb-8">
              Review plans. Compare services before hiring an agent.
            </p>
            <Button buttonLink={"/"} buttonText={"Compare Agents"} />
          </div>
          <img className="max-w-[505px]" src={agent} alt="" />
        </div>
      </div>
    </>
  );
};

export default Agents;
