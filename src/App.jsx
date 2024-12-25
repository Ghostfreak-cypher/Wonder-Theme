import React from "react";
import Logo from "./Home/Logo";
import LandingPage from "./Home/LandingPage";
import Mobile from "./Home/Mobile";
import MobileFirstTheme from "./Home/MobileFirstTheme";
import HealthAndBeauty from "./Home/HealthAndBeauty";
import FashionStore from "./Home/FashionStore";

function App() {
  return (
    <div className="overflow-hidden">
      <Logo />
      <LandingPage />
      <Mobile />
      <MobileFirstTheme />
      <HealthAndBeauty />
      <FashionStore />
    </div>
  );
}

export default App;
