import React from "react";

export default function hero() {
  return (
    <section className="text-gray-600 body-font bg-darkBlue">
      <div className="container mx-auto flex px-5 sm:py-24 py-10 md:flex-row flex-col-reverse items-center max-w-7xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-2xl mb-4 sm:px-0 px-2 mt-2 sm:mt-0 font-semibold md:font-semibold lg:font-bold text-primary tracking-wide lg:tracking-wider">
            Buy all of your digital needs in one place
          </h1>
          <p className="mb-4 leading-relaxed lg:mt-10 mt-4 text-yellow-100 sm:text-xl text-lg tracking-wide">
            Get notified when we launch
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-secondary rounded border border-secondary focus:ring-2 focus:ring-yellow-100 focus:bg-transparent focus:border-yellow-100 text-lg outline-none text-yellow-100 py-1 sm:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-yellow-100"
                placeholder="Your email address"
              />
            </div>
            <button className="inline-flex text-darkBlue  font-medium bg-primary border-0 py-2 sm:py-3 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <object
            className="object-cover object-center rounded sm:w-80 w-48 mx-auto"
            type="image/svg+xml"
            data="/images/prototypeOne.svg"
          />
        </div>
      </div>
    </section>
  );
}
