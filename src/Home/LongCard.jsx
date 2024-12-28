import React from "react";

function LongCard() {
  return (
    <div className="w-[1210px] flex h-[480px] mx-auto overflow-hidden bg-[#E9F2ED] rounded-2xl shadow-lg p-4">
      <p className="mt-4 p-5 text-[32px] font-bold max-w-xl">
        “I love this theme, it is neat, elegant and every feature you can think
        of is available. It is highly recommended.” <br />
        <a
          className="text-zinc-950 text-[21px] font-thin mt-2 "
          href="https://lagallia.com/"
        >
          La Galia
        </a>
      </p>
      <div>
        <img
          className="-m-6 mr-10 relative left-12  w-[600px] h-[600px]"
          src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/675f0add156f4295881c1a36_lagalia-1-p-500.png"
        />
      </div>
    </div>
  );
}

export default LongCard;
