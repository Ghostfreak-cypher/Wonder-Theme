import React from "react";
import Logo from "./Logo";
import LandingPage from "./LandingPage";
import Mobile from "./Mobile";
import MobileFirstTheme from "./MobileFirstTheme";
import HealthAndBeauty from "./HealthAndBeauty";
import FashionStore from "./FashionStore";
import WonderLiving from "./WonderLiving";
import Discover_Wonder_theme from "./Discover_Wonder_theme";
import Featured from "./Featured";
import LongCard from "./LongCard";
import Circle from "./Circle";
import Footer from "./Footer";

function HOME() {
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
      <LongCard />
      <Circle />
      <Footer />
    </div>
  );
}

export default HOME;
