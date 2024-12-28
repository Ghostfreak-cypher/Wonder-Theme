import React from "react";
import Logo from "../Home/Logo";
import Footer from "../Home/Footer";
const Form = () => {
  return (
    <div className="overflow-hidden height-full  bg-white">
      <Logo />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200 max-w-3xl w-full">
          <form className="space-y-6">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 text-base px-3 py-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 text-base px-3 py-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 text-base px-3 py-2"
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                How can we help you?
              </label>
              <textarea
                name="help"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 text-base px-3 py-2"
                placeholder="Describe how we can help you"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
