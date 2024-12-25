import React from "react";
import Logo from "./Home/Logo";
import LandingPage from "./Home/LandingPage";
import Mobile from "./Home/Mobile";
import MobileFirstTheme from "./Home/MobileFirstTheme";
import HealthAndBeauty from "./Home/HealthAndBeauty";
import FashionStore from "./Home/FashionStore";
import WonderLiving from "./Home/WonderLiving";

function App() {
  return (
    <div className="overflow-hidden">
      <Logo />
      <LandingPage />
      <Mobile />
      <MobileFirstTheme />
      <HealthAndBeauty />
      <FashionStore />
      <WonderLiving />
    </div>
  );
}

export default App;
