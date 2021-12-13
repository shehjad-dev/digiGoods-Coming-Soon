import React from "react";

export default function demoProducts() {
  return (
    <section className="text-gray-600 body-font bg-secondary">
      <div className="container mx-auto flex px-5 sm:py-24 py-10 md:flex-row flex-col-reverse items-center max-w-7xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 sm:px-0 px-2 mt-2 sm:mt-0 font-semibold md:font-semibold lg:font-bold tracking-wide lg:tracking-wider text-primary">
            One stop solution
          </h1>
          <p className="mb-4 leading-relaxed mt-2 sm:mt-4 md:mt-4 lg:mt-4 text-yellow-100 sm:text-xl text-lg">
            for all the things you need in recent times
          </p>
        </div>
        <div className="">
          <object
            data="/images/demo-products-graphics.svg"
            type="image/svg+xml"
            className="w-full"
          ></object>
        </div>
      </div>
    </section>
  );
}
