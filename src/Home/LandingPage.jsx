import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="Starcontainer ml-[20px]  flex justify-center relative align-center  items-center">
        <div className="Star mt-16  mr-10 p-2 rounded-full flex justify-center align-center  items-center w-[330px] h-[47px] bg-zinc-100">
          <img
            className="star h-5 w-24 absolute left-[39%]"
            src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/675b48cab6a43826473fe5f0_star-yellow-p-500.png"
            alt=""
          />
          <h1 className="Text text-[17.5px] pl-24 font-thin  text-black">
            +500 Happy Customers
          </h1>
        </div>
      </div>
      <div className="heading mt-[5px] mr-[10px]">
        <div className="heading flex justify-center align-center  items-center ">
          <h1 className="text-8xl font-bold tracking-tight">
            Wonder Commerce{" "}
          </h1>
        </div>
        <div className="heading flex justify-center align-center  items-center ">
          <h1 className="text-8xl font-bold tracking-tight">Experience </h1>
        </div>
      </div>
      <div className="miniText m-8 text-[21px]">
        <div className="TEXT flex justify-center align-center  items-center ">
          <h1 className="text-1.5xl font-low tracking-tight">
            With over 70% of purchases happening on mobile,
          </h1>
        </div>
        <div className="TEXT flex justify-center align-center  items-center ">
          <h1 className="text-1.5xl font-low tracking-tight ">
            our Shopify theme is built to convert mobile traffic into sales
            effortlessly.
          </h1>
        </div>
      </div>
      <div className="button flex justify-center align-center  items-center ">
        <button className="bg-[#3249E9] w-[310px] h-[55px]  text-white p-2 text-[19px] font-low rounded-full">
          Try Theme
        </button>
      </div>
      <h1 className="made mt-4 capitalize font-thin flex justify-center align-center  items-center ">
        made for  
        <img className="pl-2"
          src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/608acd9adfd7ae2c088fc17f_shopify-plus-vector-logo-top.svg"
          alt=""
        />
      </h1>
    </div>
  );
}

export default LandingPage;
