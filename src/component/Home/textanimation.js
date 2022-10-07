import React from "react";
import {TypeAnimation} from "react-type-animation";

export const TextAnimation = () => {
  return (
    <>
      <div className="heading_secondary">
        <TypeAnimation
          cursor={false}
          sequence={[" Providing you with the best online payment experience."]}
          repeat={3}
        /> 
      </div>
    </>
  );
};
export const TextAnimationBusiness = () => {
  return (
    <>
      <div className="businesspgcolparag">
        <TypeAnimation
          cursor={false}
          sequence={[" Make income tax remittances to the state internal revenue service for your employees."]}
          repeat={3}
        /> 
      </div>
    </>
  );
};
