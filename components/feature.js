import React from "react";

export default function feature() {
  return (
    <section className="text-gray-600 body-font bg-secondary">
      <div className="container px-5 py-24 mx-auto flex flex-wrap max-w-7xl">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center">
          <object
            className="object-cover object-center rounded sm:w-80 w-48 mx-auto"
            type="image/svg+xml"
            data="/images/prototypeTwo.svg"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
          <div className="p-4">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 sm:px-0 px-2 mt-2 sm:mt-0 font-semibold md:font-semibold lg:font-bold tracking-wide lg:tracking-wider text-primary lg:text-left text-center">
              Our Favourable Features
            </h2>
          </div>
          <div className="p-4 lg:w-full md:w-full">
            <div className="flex border-2 rounded-lg border-yellow-100 hover:shadow-xl hover:border-yellow-100 hover:border-opacity-50 transform transition border-opacity-10 p-8 sm:flex-row flex-col">
              <div className="w-12 h-12 sm:w-16 sm:h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-darkBlue text-primary flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-200 text-lg title-font font-medium mb-3 tracking-wide">
                  Feature One
                </h2>
                <p className="leading-relaxed text-base text-yellow-100">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-full md:w-full">
            <div className="flex border-2 rounded-lg border-yellow-100 hover:shadow-xl hover:border-yellow-100 hover:border-opacity-50 transform transition border-opacity-10 p-8 sm:flex-row flex-col">
              <div className="w-12 h-12 sm:w-16 sm:h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-darkBlue text-primary flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-200 text-lg title-font font-medium mb-3 tracking-wide">
                  Feature Two
                </h2>
                <p className="leading-relaxed text-base text-yellow-100">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
