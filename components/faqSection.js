import React, { useState } from "react";
export default function faqSection() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <div>
        <div class="relative flex bg-darkBlue flex-col items-center justify-center sm:px-0 px-6 z-20 pb-28 md:pb-32">
          <div class="md:pt-32 md:pb-20 pt-20 pb-14">
            <h1
              role="heading"
              class="sm:text-3xl md:text-4xl text-3xl font-semibold md:font-semibold lg:font-bold tracking-wide lg:tracking-wider title-font text-primary"
            >
              Frequently asked questions
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            <div class="bg-secondary shadow rounded p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-yellow-200">
                    Why should I use your service?
                  </h2>
                </div>
                <button onClick={() => setBox1(!box1)} class="cursor-pointer">
                  {/* <button
                  onClick={() => setBox1(!box1)}
                  class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                > */}
                  {box1 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul class="">
                  <li>
                    <p class="text-base leading-normal text-yellow-100 mt-4 ">
                      If you want to choose Pro or Business plan the you can use
                      all payments. You can pay from Paypal, Payoneer, Master
                      Card, Debit Card.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div class="bg-secondary shadow rounded p-8 mt-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-yellow-200">
                    What payment method I can use?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  class="cursor-pointer"
                >
                  {box2 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul>
                  <li>
                    <p class="text-base leading-normal text-yellow-100 mt-4">
                      If you want to choose Pro or Business plan the you can use
                      all payments. You can pay from Paypal, Payoneer, Master
                      Card, Debit Card.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div class="bg-secondary shadow rounded p-8 mt-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-yellow-200">
                    Is your service safe to use?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  data-menu
                  class="cursor-pointer"
                >
                  {box3 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p class="text-base leading-normal text-yellow-100 mt-4">
                      If you want to choose Pro or Business plan the you can use
                      all payments. You can pay from Paypal, Payoneer, Master
                      Card, Debit Card.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div class="bg-secondary shadow rounded p-8 mt-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-yellow-200">
                    How to recover password?
                  </h2>
                </div>
                <button
                  onClick={() => setBox4(!box4)}
                  data-menu
                  class="cursor-pointer"
                >
                  {box4 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#FDE373"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box4 && (
                <ul>
                  <li>
                    <p class="text-base leading-normal text-yellow-100 mt-4">
                      If you want to choose Pro or Business plan the you can use
                      all payments. You can pay from Paypal, Payoneer, Master
                      Card, Debit Card.
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
