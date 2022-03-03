/* eslint-disable @next/next/no-img-element */

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
const InputField = ({ text, inputStyle, type }) => {
  return (
    <div className="flex flex-col gap-y-[0.625rem] mt-[1.5rem]">
      <label
        htmlFor={text}
        className="text-[.75rem] text-[rgba(126,136,195,1)]"
      >
        {text}
      </label>
      <input
        type={type}
        name={text}
        className={`${inputStyle} h-[3rem] rounded-[.25rem] border-[1px] border-[rgba(223,227,250,1)] px-[1.25rem]`}
      />
    </div>
  );
};

const EditListItem = ({ itemName, qty, price, total }) => {
  return (
    <div className="mt-[1rem] flex justify-between items-center">
      <input
        defaultValue={itemName}
        type="text"
        className="h-[3rem] px-[1.2rem] text-[.75rem] font-bold  w-[13.375rem] border-[1px] border-[rgba(223,227,250,1)] rounded-[.25rem]"
      />

      <input
        defaultValue={qty}
        type="text"
        className="h-[3rem] text-[.75rem] px-1 font-bold rounded-[.25rem] border-[1px] border-[rgba(223,227,250,1)] text-center w-[2.875rem]"
      />

      <input
        defaultValue={price}
        type="text"
        className="h-[3rem] text-[.75rem] font-bold  rounded-[.25rem] border-[1px] border-[rgba(223,227,250,1)] px-[1.2rem] w-[6.25rem]"
      />

      <input
        text="text"
        defaultValue={total}
        className="h-[3rem] bg-transparent text-[.75rem] rounded-[.25rem] font-bold w-[3rem] text-[rgba(119,127,152,1)]"
      />

      <img
        src="/assets/icon-delete.svg"
        className="w-[.75rem] h-[1rem]"
        alt="trash icon"
      />
    </div>
  );
};

const InvoiceEdit = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            </Transition.Child>

            <div className="">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="absolute bg-white w-[44.938rem] inset-0 z-[1] h-screen pl-[9.938rem] pr-[3.5rem] pt-[3.5rem] rounded-r-[1.25rem] pb-[2rem] overflow-y-auto">
                  <p className="font-bold text-[1.5rem]">
                    Edit <span className="text-[rgba(136,142,176,1)]">#</span>
                    XM9141
                  </p>

                  <div className=" mt-[3rem]">
                    <p className=" font-bold text-[.5rem] text-[rgba(124,93,250,1)]">
                      Bill from
                    </p>

                    <InputField
                      text="Street Address"
                      inputStyle="w-full"
                      type="text"
                    ></InputField>
                    <div className="flex justify-between gap-x-[1.5rem]">
                      <InputField text="City" inputStyle="w-full" type="text" />
                      <InputField
                        text="Post Code"
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        text="Country"
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" mt-[3rem]">
                    <p className=" font-bold text-[.5rem] text-[rgba(124,93,250,1)]">
                      Bill To
                    </p>

                    <InputField
                      text="Client's Name"
                      inputStyle="w-full"
                      type="text"
                    />
                    <InputField
                      text="Client's Email"
                      inputStyle="w-full"
                      type="text"
                    />
                    <InputField
                      text="Street Address"
                      inputStyle="w-full"
                      type="text"
                    />
                    <div className="flex justify-between gap-x-[1.5rem]">
                      <InputField text="City" inputStyle="w-full" type="text" />
                      <InputField
                        text="Post Code"
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        text="Country"
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" mt-[3rem]">
                    <div className="flex justify-between gap-x-[1.5rem]">
                      <InputField
                        text="Invoice Date"
                        inputStyle="w-full"
                        type="Date"
                      />
                      <InputField
                        text="Payment Terms"
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                    <InputField
                      text="Project Description"
                      inputStyle="w-full"
                      type="text"
                    />
                  </div>

                  <div className=" mt-[3rem]">
                    <div className="flex justify-between gap-x-[1.5rem]">
                      <InputField
                        text="Invoice Date"
                        inputStyle="w-full"
                        type="Date"
                      />
                      <InputField
                        text="Payment Terms"
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                    <InputField
                      text="Project Description"
                      inputStyle="w-full"
                      type="text"
                    />
                  </div>

                  <div className=" mt-[2rem] ">
                    <p className="font-bold text-[rgba(119,127,152,1)]">
                      Item List
                    </p>
                    <div className="text-left flex text-[.7rem] text-[rgba(126,136,195,1)] justify-between  text-[rgba(126,136,195,1) mt-[1.5rem]">
                      <p className="w-[13.375rem]">Item Name</p>
                      <p className="w-[2.875rem]">Qty.</p>
                      <p className="w-[6.25rem]">Price</p>
                      <p className="w-[3rem]">Total</p>
                      <p>
                        <img
                          src="/assets/icon-delete.svg"
                          className="w-[.75rem] h-[1rem] opacity-0"
                          alt="trash icon"
                        />
                      </p>
                    </div>

                    <EditListItem
                      itemName="Banner Design"
                      qty="1"
                      price="156.00"
                      total="156.00"
                    />
                    <EditListItem
                      itemName="Email Design"
                      qty="2"
                      price="200.00"
                      total="400.00"
                    />
                    <button className="mt-[2.188rem] w-full text-[.75rem] text-[rgba(126,136,195,1)] font-bold flex justify-center items-center">
                      <img src="/assets/icon-plus.svg" alt="plus icon" />
                      Add New Item
                    </button>

                    <div className="flex text-[.75rem] gap-x-[.5rem] mt-[2.438rem] justify-end">
                      <button className="font-bold py-[.5rem] h-[3rem] px-[1.25rem] text-[rgba(126,136,195,1)]">
                        Cancel
                      </button>
                      <button className="text-white text-[.75rem] font-bold h-[3rem] py-[.52rem] px-[1.25rem] rounded-full bg-[rgba(124,93,250,1)]">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InvoiceEdit;
