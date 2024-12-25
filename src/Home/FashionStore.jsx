import React from "react";

function FashionStore() {
  return (
    <div className="w-full flex h-[800px] bg-[#EAEBDF]">
      <div className="Photo relative w-1/2 h-[800px]">
        <div className="image-container flex justify-center items-center h-full">
          <img
            className="mt-32 absolute ml-72 mb-6"
            src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/6609db7c070aa2abea452304_box-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="Text flex  justify-start items-center pl-[68px] pt-12  w-1/2 h-[800px]">
        <h1 className="text-[21px] text-zinc-500  ml-20 mr-2 leading-none">
          Wonder Couture
          <h1 className="text-[74px] text-black font-sans mr-2  font-semibold ">
            Perfect for <br />
            Fashion store
            <h1 className="minitext font-light text-[21px] leading-7 mr-2  text-[#000000] max-w-[400px] mt-6">
              Designed for fashion, our template offers sleek, mobile-optimized
              sections that highlight your products with style. Featuring
              innovative video sales sections, it creates an immersive shopping
              experience that drives engagement and boosts sales.
            </h1>
          </h1>
        </h1>
      </div>
    </div>
  );
}

export default FashionStore;
