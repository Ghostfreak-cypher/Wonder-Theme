import React from "react";

function MobileFirstTheme() {
  return (
    <div className="MobileFirstTheme flex flex-col justify-center align-center font-['satoshi'] items-center mt-60 ">
      <h1 className="Text text-[21px] text-zinc-500 font-thin  ">
        Mobile First Theme - Shopify 2.0
      </h1>
      <div className="heading mt-[5px] mr-[10px]">
        <div className="heading flex-box justify-center align-center  items-center ">
          {["From Small", "Business to Big", "Commerce"].map((item, index) => (
            <div
              className="flex justify-center align-center font-bold   items-center "
              key={index}
            >
              <h1 className="text-[100px] -p-10 -m-8 tracking-tight">{item}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="miniText w-[900px] m-8 text-[21px]">
        <h1 className="max-w-3xl mx-auto text-zinc-500 text-[22px] font-['satoshi-700']  text-center text-[rgb(29, 29, 31)] text-[20px] leading-[32px] font-sans">
          With 15 years of ecommerce expertise, we've developed a reliable,
          high-converting Shopify template based on Baymard Institute
          guidelines. Designed with a mobile-first and UX-focused approach, it's
          perfect for stores of all sizes. We've eliminated unnecessary
          distractions, focusing on a clean UI that maximizes conversion rates.
          Plus, our innovative video sections engage users and boost
          interaction, creating a dynamic shopping experience. Experience the
          perfect balance of design, functionality, and video-driven engagement,
          built to drive our Shopify theme is built to convert mobile traffic
          into sales effortlessly Sales.
        </h1>
      </div>

      <h1 className="made mt-4 capitalize font-thin flex justify-between align-center gap-24  items-center ">
        <img
          className="pl-2 w-[242px] h-[87px]"
          src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/608ad160b5d68909ee6c5ed0_smashing_logo.png"
          alt=""
        />
        <img
          className="pl-2 w-[242px] h-[87px]"
          src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/608ad160b5d689b5aa6c5ed3_baymard-logo.png"
          alt=""
        />
        <img
          className="pl-2 w-[242px] h-[87px]"
          src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/608ad160b5d689f4aa6c5ed6_ux_planet-p-500.png"
          alt=""
        />
      </h1>
    </div>
  );
}

export default MobileFirstTheme;
