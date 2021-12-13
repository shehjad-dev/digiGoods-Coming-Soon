import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <header className="text-yellow-100 body-font bg-darkBlue border-b-2 border-yellow-100">
      <div className="container mx-auto flex flex-wrap sm:p-5 pt-3 px-5 flex-row md:flex-row items-center max-w-7xl">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-primary mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-darkBlue p-2 bg-primary rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Digigoods</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
