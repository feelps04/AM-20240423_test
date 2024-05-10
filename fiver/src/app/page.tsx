import React from "react";
import AuthWrapper from "./components/AuthWrapper";
import Companies from "./components/Landing/companiens";
import Everything from "./components/Landing/Everything";
import FiverrBusiness from "./components/Landing/FiverrBusiness";
import HeroBanner from "./components/Landing/HeroBanner"; 
import JoinFiverr from "./components/Landing/JoinFiveer";
import PopularServices from "./components/Landing/PopularServices";
import Services from "./components/Landing/Services";

function Page() {
  // Importando useStateProvider de maneira diferente
  const { showLoginModal, showSignupModal } = require("../../src/app/context/StateContext");

  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <JoinFiverr />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Page;
