import React from "react";
import Logo from "./Home/Logo";
import LandingPage from "./Home/LandingPage";
import Mobile from "./Home/Mobile";
import MobileFirstTheme from "./Home/MobileFirstTheme";
import HealthAndBeauty from "./Home/HealthAndBeauty";
import FashionStore from "./Home/FashionStore";
import WonderLiving from "./Home/WonderLiving";
import Discover_Wonder_theme from "./Home/Discover_Wonder_theme";
import Featured from "./Home/Featured";

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
      <Discover_Wonder_theme />
      <Featured />
    </div>
  );
}

export default App;
