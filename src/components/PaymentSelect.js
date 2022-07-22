/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import TransitionComponent from "./TransitionComponent";

export default function PaymentSelect({ paymentList, selected, setSelected }) {
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full md:w-[15rem] py-4 px-[1.25rem] text-left text-[0.7rem] bg-white dark:bg-[rgba(30,33,57,1)] cursor-pointer ring-[rgba(223,227,250,1)] dark:ring-[rgb(37,41,69)] dark:ring-0 dark:text-white rounded-[.25rem] focus:outline-none ring-1 font-bold focus-visible:ring-opacity-75 focus-visible:ring-white h-[3rem] focus-visible:ring-[rgba(124,93,250,1)]">
            <span className="block truncate">
              {" "}
              {selected === 1
                ? "Net " + selected + " day"
                : `Net ${selected} days`}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <img src="/assets/icon-arrow-down.svg" alt="arrow down" />
            </span>
          </Listbox.Button>
          <TransitionComponent>
            <Listbox.Options className="absolute w-full mt-2 overflow-auto text-[.7rem] bg-whte bg-white dark:text-[rgba(223,227,250,1)] border-0 dark:bg-[rgba(37,41,69,1)] rounded-md [box-shadow:_0px_10px_20px_0px_rgba(72,84,159,0.25)] max-h-60 text-[rgba(12,14,22,1)] focus-visible:ring-[rgba(124,93,250,1)] dark:divide-[rgba(30,33,57,1)] divide-y-[1px] divide-[rgba(223,227,250,1)] font-bold ring-opacity-5 focus:outline-none">
              {paymentList?.map((type, Idx) => (
                <Listbox.Option
                  key={Idx + type}
                  className={({ active }) =>
                    `cursor-pointer select-none transition-all relative py-4 divide-x-2 px-[1.5rem] pr-4 ${
                      active ? "text-[rgba(124,93,250,1)]" : ""
                    }`
                  }
                  value={type}
                >
                  <span>
                    {type === 1 ? "Net " + type + " day" : `Net ${type} days`}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </TransitionComponent>
        </div>
      </Listbox>
    </div>
  );
}
