/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import TransitionComponent from "./transition_component";

export default function PaymentSelect({ paymentList, selected, setSelected }) {
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-[15rem] py-4 px-[1.25rem] text-left text-[0.7rem] bg-white cursor-pointer ring-[rgba(223,227,250,1)]  rounded-[.25rem] focus:outline-none ring-1 font-bold focus-visible:ring-opacity-75 focus-visible:ring-white h-[3rem] focus-visible:ring-[rgba(124,93,250,1)]">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <img src="/assets/icon-arrow-down.svg" alt="arrow down" />
            </span>
          </Listbox.Button>
          <TransitionComponent>
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-[.7rem] bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black text-[rgba(12,14,22,1)] divide-y-[1px] divide-[rgba(223,227,250,1)] font-bold ring-opacity-5 focus:outline-none">
              {paymentList?.map((payment_type, personIdx) => (
                <Listbox.Option
                  key={personIdx + payment_type}
                  className={({ active }) =>
                    `cursor-pointer select-none transition-all relative py-4 divide-x-2 px-[1.5rem] pr-4 ${
                      active ? "text-[rgba(124,93,250,1)] bg-white " : ""
                    }`
                  }
                  value={payment_type}
                >
                  <span>{payment_type}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </TransitionComponent>
        </div>
      </Listbox>
    </div>
  );
}
