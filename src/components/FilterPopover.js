/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";
import TransitionComponent from "./TransitionComponent";

export default function Filter({ setFilter, filter }) {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center h-[32px] font-bold text-[0.75rem] w-fit  gap-x-[1rem]">
              <p>
                Filter <span className="hidden md:inline">by status</span>
              </p>
              <img
                src="/assets/icon-arrow-down.svg"
                className="w-[0.529rem] h-[0.264rem]"
                alt="arrow down"
              />
            </Popover.Button>
            <TransitionComponent>
              <Popover.Panel className="absolute [box-shadow:_0px_10px_20px_0px_rgba(72,84,159,0.25)] rounded-[.5rem] z-10 px-4 mt-3 w-[12rem] dark:text-white dark:bg-[rgba(37,41,69,1)] bg-white  transform -translate-x-1/2 left-14  sm:px-0">
                <div className="overflow-hidden rounded-lg p-[1.5rem] ring-black ring-opacity-5">
                  <div className="relative space-y-[1rem]">
                    {["Draft", "Pending", "Paid"].map((item) => (
                      <div
                        className="flex w-fit relative font-bold text-[0.7rem]"
                        key={item}
                        onClick={() => setFilter(item)}
                      >
                        <input
                          defaultChecked={filter === item ? true : false}
                          className="appearance-none peer checked:bg-[rgba(124,93,250,1)] cursor-pointer rounded-sm border-[rgb(14,93,250)] dark:bg-[rgba(30,33,57,1)] hover:border-2 bg-[rgba(223,227,250,1)] w-4 h4"
                          type="radio"
                          name="status"
                          id={item}
                        />
                        <img
                          className="absolute transition-all pointer-events-none scale-0 peer-checked:scale-100 top-1 left-[3px]"
                          src="/assets/icon-check.svg"
                          alt="check image"
                        />
                        <label
                          className="cursor-pointer pl-[.8rem]"
                          htmlFor={item}
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </TransitionComponent>
          </>
        )}
      </Popover>
    </div>
  );
}
