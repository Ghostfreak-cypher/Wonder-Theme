import React from "react";

function WonderLiving() {
  return (
    <div className="w-full flex h-[800px] bg-[#E5E8E9]">
      <div className="Text flex  justify-start items-center mt-12 pt-12  w-1/2 h-[800px]">
        <h1 className="text-[21px] text-zinc-500  ml-20 mr-2 leading-none">
          Wonder Living
          <h1 className="text-[74px] text-black font-sans mr-2  font-semibold ">
            Tailored UX for
            <br />
            Home & Garden
            <h1 className="minitext  text-[21px]  text-zinc-950 leading-7 mr-2  font-thin max-w-[380px] mt-6">
              A marketplace-inspired theme optimized for large product catalogs.
              Finally, a theme that features proven designs to increase
              conversions thanks to the experience and expertise of
              Bayamard.com. Make it easy for your shoppers to find products they
              like and guide them to complete checkout . On any screen size,
              large or small.
            </h1>
          </h1>
        </h1>
      </div>
      <div className="Photo relative mt-6 w-1/2 h-[800px]">
        <div className="image-container flex justify-center items-center h-full">
          <img
            className="mt-36 h-[75%]  absolute mr-44 mb-6"
            src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/656f7d82ba71150036b90ed0_wonder-home-hp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WonderLiving;
