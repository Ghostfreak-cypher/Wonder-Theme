import React from "react";

function HealthAndBeauty() {
  return (
    <div className="w-full  h-[730px] bg-[#E9F4ED] ">
      <div className=" Tablet-container leading-none pl-20 w-1/2 h-full ">
        <div className="MobileFirstTheme flex flex-col  align-center font-['satoshi'] items-center mt-60 ">
          <h1 className="Text text-[25px] text-sans mr-[500px] ml-[20px] text-zinc-500 font-thin  mt-32 ">
            Wonder Beauty
          </h1>
          <div className="heading mt-[20px] mr-[280px]">
            <div className="heading flex-box justify-center align-center  items-center ">
              {["Health and", "beauty", "products?"].map((item, index) => (
                <div
                  className="flex  font-bold font-sans leading-[135px] "
                  key={index}
                >
                  <h1 className="text-[74px] -p-10 -m-8 tracking-tight">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="miniText w-[900px] m-8 mr-[220px] text-[21px]">
            <h1 className="max-w-[450px] mx-auto  text-zinc-500 text-[22px] font-['satoshi-700']   text-[rgb(29, 29, 31)] text-[20px] leading-[32px] font-sans">
              Our template features tailor-made sections for beauty products,
              optimized for mobile with innovative video-driven sales tools.
              Perfectly designed to showcase your skincare and body care items,
              it enhances user engagement and boosts conversions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthAndBeauty;
