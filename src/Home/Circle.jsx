import React from "react";

function Circle() {
  return (
    <div className="w-full h-[100vh] mt-32">
      <div className="flex justify-center -mb-10 items-center h-[40vh]">
        <h1 className="text-[76px] leading-tight font-bold text-center">
          <h1 className="text-[21px] text-zinc-500 font-light  ">
            Mobile First <br />
          </h1>
          Perfect for mobile <br /> performance
        </h1>
      </div>
      <div className="flex justify-center flex-col h-[60vh] items-center">
        <div className="flex  justify-center items-center">
          <div className="card w-[350px] flex flex-col justify-center items-center h-[40vh]  m-2 p-4 ">
            <img
              className="w-2/3 h-2/3 "
              src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/672b583021d98dcfc6070f8b_asset-1.svg"
              alt=""
            />
            <h1 className="text-2xl font-bold mt-5 justify-center items-center ">
              Accessibility
            </h1>
          </div>
          <div className="card w-[350px] flex flex-col justify-center items-center h-[40vh]  m-2 p-4 ">
            <img
              className="w-2/3 h-2/3 "
              src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/672b5830938af4e2ca6328fa_asset-2.svg"
              alt=""
            />
            <h1 className="text-2xl font-bold mt-5 justify-center items-center ">
              Performance
            </h1>
          </div>
          <div className="card w-[350px] flex flex-col justify-center items-center h-[40vh]  m-2 p-4 ">
            <img
              className="w-2/3 h-2/3 "
              src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/6570760a9f1ed1a2e10991d3_93-circle-2.svg"
              alt=""
            />
            <h1 className="text-2xl capitalize font-bold mt-5 justify-center items-center ">
              Best practices
            </h1>
          </div>
        </div>
        <h1 className="text-[14px] text-zinc-500 text-center font-light  max-w-[1000px]">
          Test made on the basis of: Lighthouse Report Viewer, it refers to the
          stony where the images were properly optimized. The test may come out
          differently if there are more images or the images are of significant
          size.
        </h1>
      </div>
    </div>
  );
}

export default Circle;
