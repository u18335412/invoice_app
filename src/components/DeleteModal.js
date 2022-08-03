import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useStore from "../store/theme";

export default function DeleteModal({
  isOpen,
  closeModal,
  handleDelete,
  invoiceId,
}) {
  const { isDark } = useStore();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`fixed ${
            isDark ? "dark" : ""
          } inset-0 z-10 overflow-y-auto`}
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
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 md:scale-95 md:translate-y-0 translate-y-full"
              enterTo="opacity-100 md:scale-100"
              leave="ease-in md:duration-200"
              leaveFrom="md:opacity-100 md:scale-100"
              leaveTo="md:opacity-0 md:scale-95 translate-y-full md:translate-y-0"
            >
              <div className="inline-block dark:bg-[rgba(30,33,57,1)] w-full max-w-md p-[2rem] md:p-[3rem] my-8 [box-shadow:_0px_10px_10px_-10px_rgba(72,84,159,0.1)] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-[.5rem]">
                <Dialog.Title
                  as="h3"
                  className="text-[1.5rem] font-bold leading-6 dark:text-white text-gray-900"
                >
                  Confirm Deletion
                </Dialog.Title>
                <div className="mt-[0.813rem]">
                  <p className="text-[.7rem] leading-[22px] w-fit tracking-[-0.25px] dark:text-[rgba(223,227,250,1)] text-[rgba(136,142,176,1)]">
                    Are you sure you want to delete invoice #{invoiceId}? This
                    action cannot be undone.
                  </p>
                </div>

                <div className="flex gap-x-[.5rem] justify-end w-full mt-[1.5rem] md:mt-4">
                  <button
                    onClick={closeModal}
                    className="text-[rgba(126,136,195,1)] dark:bg-[rgba(37,41,69,1)] text-[.75rem] font-bold px-[1.2rem] rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
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
