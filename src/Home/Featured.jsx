import React from "react";

function Featured() {
  return (
    <div className="w-full py-6">
      <div className="px-20">
        <div className="  cards w-full flex justify-center gap-10 mt-10">
          <div className=" cardcontainer relative rounded-xl w-[43%] h-[80vh] bg-[#F1F4F6] ">
            <div className="card w-full h-full -mt-10 rounded-xl overflow-hidden">
              <h1 className=" ml-4 flex -mt-8 text-[300px] tracking-tighter font-bold bg-gradient-to-r from-[#3249E9] to-[#1c61aa] bg-clip-text text-transparent">
                1 <h1 className="text-cyan-400">7</h1>
              </h1>
              <h1 className="text-[#000000] text-5xl font-semibold ml-12 tracking-tight -mt-10">
                Mobile First <br />
                Features
              </h1>
              <button className="mt-6 ml-12 bg-transparent font-serif text-xl text-black px-14 py-[14px] rounded-full border-gray-950 border-2 hover:bg-black hover:text-white transition duration-300">
                Discover all features
              </button>
            </div>
          </div>
          <div className="cardcontainer relative w-[43%] rounded-xl  h-[80vh] bg-gradient-to-br from-cyan-400 to-blue-950">
            <div className="card w-full h-full max-w-[30rem] flex justify-center items-center leading-none  ">
              <p class="text-white relative left-14 bottom-2 right-2 text-[52px] font-bold leading-tight tracking-normal">
                "Great theme, great support. Being updated regularly to keep up
                with changes. Recommend."
                <div class="mt-7">
                  <p class="text-white text-lg font-normal">Robin D.</p>
                  <p class="text-[#5DA6CF] tracking-[0.13em] mt-2 leading-tighter text-sm ">
                    MARKETING SPECIALIST
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
