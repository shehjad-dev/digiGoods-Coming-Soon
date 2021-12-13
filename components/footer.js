import React from "react";
import Link from "next/link";
/* left: 0;
right: 0;
margin: auto */
export default function footer() {
  return (
    <section className="text-gray-600 body-font bg-darkBlue pt-32 relative">
      <div className="bg-primary rounded-xl w-11/12 max-w-4xl mx-auto p-8 absolute top-10 left-0 right-0 m-auto">
        <div className="title-font sm:text-4xl text-2xl mb-4 sm:px-0 px-2 mt-2 sm:mt-0 font-semibold md:font-semibold lg:font-bold text-darkBlue tracking-wide lg:tracking-wider text-center">
          Get notified when we launch
        </div>
        <div className="flex flex-col sm:flex-row mb-3 mt-6 text-center mx-auto w-10/12 justify-evenly">
          <div className="sm:w-4/6 w-full pb-4">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-secondary rounded border border-secondary focus:ring-2 focus:ring-darkBlue focus:bg-seconday focus:border-yellow-100 text-lg outline-none text-yellow-100 py-1 sm:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-yellow-100"
              placeholder="Your email address"
            />
          </div>
          <div>
            <button className="w-full py-1 sm:py-3 text-yellow-100  font-medium bg-darkBlue border-0  px-6 focus:outline-none hover:bg-black rounded text-lg justify-center sm:justify-start">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-yellow-100 bg-secondary py-16">
        <div className="sm:w-1/4 w-full align-middle justify-center mx-auto flex sm:flex-row flex-col sm:align-middle sm:justify-between mt-44 pb-10  text-center">
          <div className="flex justify-center pb-4 sm:pb-0">
            <Link href="/">
              <a className="flex title-font font-medium items-center text-primary mb-4 md:mb-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="sm:w-14 sm:h-14 w-12 h-12 text-darkBlue p-2 bg-primary rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 sm:text-2xl text-xl">Digigoods</span>
              </a>
            </Link>
          </div>
          <div className="flex align-middle justify-center">
            <div>
              <Link href="/">
                <div className="w-12 h-12 sm:w-14 sm:h-14 sm:mr-4 mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-darkBlue text-primary flex-shrink-0 cursor-pointer">
                  <img src="/images/fbIcon.svg" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="w-12 h-12 sm:w-14 sm:h-14 sm:mr-4 mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-darkBlue text-primary flex-shrink-0 cursor-pointer">
                  <img src="/images/instaIcon.svg" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="w-12 h-12 sm:w-14 sm:h-14 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-darkBlue text-primary flex-shrink-0 cursor-pointer">
                  <img src="/images/linkedinIcon.svg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-6">
        <div className="text-yellow-200 text-lg title-font font-medium tracking-wide">
          Powered by Techshoi
        </div>
      </div>
    </section>
  );
}
