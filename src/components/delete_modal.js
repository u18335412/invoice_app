import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function DeleteModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
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

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-[3rem] my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-[.5rem]">
                <Dialog.Title
                  as="h3"
                  className="text-[1.5rem] font-bold leading-6 text-gray-900"
                >
                  Confirm Deletion
                </Dialog.Title>
                <div className="mt-[0.813rem]">
                  <p className="text-[.7rem] leading-[22px] w-fit tracking-[-0.25px] text-[rgba(136,142,176,1)]">
                    Are you sure you want to delete invoice #XM9141? This action
                    cannot be undone.
                  </p>
                </div>

                <div className="flex gap-x-[.5rem] justify-end w-full mt-4">
                  <button
                    onClick={closeModal}
                    className="text-[rgba(126,136,195,1)] text-[.75rem] font-bold px-[1.2rem]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => console.log("Deleted!")}
                    className=" font-bold text-[0.75rem] px-[1.5rem] text-white rounded-full bg-[rgba(236,87,87,1)] py-[1rem]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
