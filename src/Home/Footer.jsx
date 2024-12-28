import React from "react";

function Footer() {
  return (
    <div className="footer h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-black min-h-screen flex flex-col justify-center items-center text-center text-white">
        <header className="mb-8">
          <h1 className="text-4xl text-[86px] font-bold leading-[1.1]">
            Start selling with <h1 className="text-blue-500">Wonder.</h1>
          </h1>
          <p className="text-gray-600 mt-10 text-[21px] max-w-[45rem] mx-auto">
            Designed to captivate, convert, and elevate your store with a
            mobile-first, video-driven experience.
          </p>
        </header>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-16 rounded-full">
            Explore Wonder theme
          </button>
        </div>
        <footer className="mt-16 text-sm text-gray-500">
          <div className="mb-4 flex items-center gap-3 justify-center space-x-2">
            Made for
            <img
              src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/608acd9adfd7ae2c088fc17f_shopify-plus-vector-logo-top.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">
              Affiliate Program
            </a>
            <a href="#" className="hover:underline">
              Our Support
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </div>
          <div className="mt-4">© 2024 Wonder-theme.com</div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
