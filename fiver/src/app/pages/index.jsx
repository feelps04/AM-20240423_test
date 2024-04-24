import Everything from "../components/Landing/Everything";
import FiverrBusiness from "../components/Landing/fiverrBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinFiverr from "../components/Landing/JoinFiveer";
import PopularServices from "../components/Landing/popularServices";
import Services from "../components/Landing/services";
import React from "react";

function Index() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <JoinFiverr />
    </div>
  );
}

export default Index;
