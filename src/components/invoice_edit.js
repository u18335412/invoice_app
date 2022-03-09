/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PaymentSelect from "./payment _term_select";
import { useForm } from "react-hook-form";
import TransitionComponent from "./transition_component";
import { useInvoice } from "../../utils/invoice_actions";
import useStore from "../store/zuestand";

const InputField = ({
  label,
  placeholder,
  inputStyle,
  type,
  input,
  value,
  register,
  errors,
  text,
}) => (
  <div className="flex flex-col gap-y-[0.625rem] mt-[1.5rem]">
    <label
      htmlFor={label}
      className={`flex dark:text-[rgba(223,227,250,1)] justify-between items-center text-[.75rem] ${
        errors[`${text}`]
          ? "text-[rgba(236,87,87,1)]"
          : "text-[rgba(126,136,195,1)]"
      } `}
    >
      {label}
      <span
        className={`text-[0.625rem] font-semibold ${
          errors[`${text}`] ? "" : "hidden"
        }`}
      >
        {"can't be empty"}
      </span>
    </label>
    {input ? (
      <>{input}</>
    ) : (
      <>
        <input
          {...register(text, { required: true })}
          placeholder={placeholder}
          defaultValue={value}
          type={type}
          name={text}
          className={`${inputStyle} h-[3rem] text-[.7rem] font-bold rounded-[.25rem] border-[1px] dark:border-[rgb(37,41,69)] border-[rgba(223,227,250,1)] outline-none focus:border-opacity-100 dark:bg-[rgba(30,33,57,1)] dark:text-white focus:border-[rgba(124,93,250,1)] px-[1.25rem] ${
            errors[`${text}`] ? "border-[rgba(236,87,87,1)]" : ""
          }  `}
        />
      </>
    )}
  </div>
);

const EditListItem = ({
  itemName,
  qty,
  price,
  total,
  register,
  errors,
  value,
}) => {
  return (
    <div className="mt-[1rem] flex justify-between items-center">
      <input
        {...register(`${itemName}Name`, { required: true })}
        type="text"
        defaultValue={value}
        name={`${itemName}Name`}
        className={`h-[3rem] px-[1.2rem] dark:bg-[rgba(30,33,57,1)] focus:border-[rgba(124,93,250,1)] dark:text-white dark:border-[rgba(37,41,69,1)] text-[.75rem] font-bold  w-[13.375rem] border-[1px] ${
          errors[`${itemName}Name`]
            ? "border-[rgba(236,87,87,1)]"
            : "border-[rgba(223,227,250,1)]"
        }  rounded-[.25rem]`}
      />

      <input
        {...register(`${itemName}Qty`, { required: true })}
        defaultValue={qty}
        type="text"
        name={`${itemName}Qty`}
        className={`h-[3rem] focus:border-[rgba(124,93,250,1)] dark:text-white dark:bg-[rgba(30,33,57,1)] text-[.75rem] dark:border-[rgba(37,41,69,1)] px-1 font-bold rounded-[.25rem] border-[1px] ${
          errors[`${itemName}Qty`]
            ? "border-[rgba(236,87,87,1)]"
            : "border-[rgba(223,227,250,1)]"
        } text-center w-[2.875rem]`}
      />

      <input
        {...register(`${itemName}Price`, { required: true })}
        placeholder="0.0"
        defaultValue={price}
        type="text"
        name={`${itemName}Price`}
        className={`h-[3rem] text-[.75rem] dark:text-white dark:bg-[rgba(30,33,57,1)] focus:border-[rgba(124,93,250,1)] font-bold dark:border-[rgba(37,41,69,1)]  rounded-[.25rem] border-[1px] ${
          errors[`${itemName}Price`]
            ? "border-[rgba(236,87,87,1)]"
            : "border-[rgba(223,227,250,1)]"
        } px-[1.2rem] w-[6.25rem]`}
      />

      <input
        {...register(`${itemName}Total`, { required: true })}
        placeholder="0.0"
        text="text"
        defaultValue={total}
        name={`${itemName}Total`}
        className={`h-[3rem] dark:border-[rgba(37,41,69,1)] dark:text-white  focus:border-[rgba(124,93,250,1)] bg-transparent text-[.75rem] rounded-[.25rem] font-bold w-[3rem] ${
          errors[`${itemName}Name`]
            ? "border-[rgba(236,87,87,1)]"
            : "border-[rgba(223,227,250,1)]"
        } text-[rgba(119,127,152,1)] px-[.2rem]`}
      />

      <img
        src="/assets/icon-delete.svg"
        className="w-[.75rem] h-[1rem]"
        alt="trash icon"
      />
    </div>
  );
};

const InvoiceEditAdd = ({ isOpen, closeModal, invoiceData }) => {
  const payment_type = [
    "Net 1 Day",
    "Net 7 Days",
    "Net 14 Days",
    "Net 30 Days",
  ];
  const isDark = useStore((state) => state.isDark);
  const [selected, setSelected] = useState(payment_type[0]);
  const { editInvoice, addInvoice } = useInvoice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [invoiceItems, setInvoiceItems] = useState(invoiceData?.items || []);
  const [itemsError, setItemsError] = useState(false);

  const handleEditInvoice = (data) => {
    setItemsError(false);
    invoiceItems.length < 1
      ? setItemsError(true)
      : editInvoice(
          { ...data, id: invoiceData.id },
          invoiceItems.length,
          selected
        );

    closeModal();
  };

  const handleAddInvoice = (data) => {
    setItemsError(false);
    invoiceItems.length < 1
      ? setItemsError(true)
      : addInvoice(data, invoiceItems.length, selected);
  };

  const addItem = () => {
    const item = { name: "", quantity: "", price: "", total: "" };
    setInvoiceItems([...invoiceItems, item]);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className={`${isDark ? "dark" : ""}`}>
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
                <div className="absolute bg-white dark:bg-[rgba(20,22,37,1)] xl:w-[44.938rem] inset-0 z-[1] h-screen md:px-[3.5rem] xl:pl-[9.938rem] xl:pr-[3.5rem] md:pt-[8.5rem] xl:pt-[3.5rem] md:w-[38.5rem] rounded-r-[1.25rem] pb-[2rem] overflow-y-auto">
                  <p className="font-bold text-[1.5rem] dark:text-white">
                    {invoiceData && Object.keys(invoiceData).length !== 0 ? (
                      <>
                        Edit{" "}
                        <span className="text-[rgba(136,142,176,1)]">#</span>
                        {invoiceData?.id}
                      </>
                    ) : (
                      <>New Invoice</>
                    )}
                  </p>

                  <div className=" mt-[3rem]">
                    <p className=" font-bold text-[.5rem] text-[rgba(124,93,250,1)]">
                      Bill from
                    </p>

                    <InputField
                      errors={errors}
                      value={invoiceData?.senderAddress?.street}
                      label="Street Address"
                      text="senderStreet"
                      inputStyle="w-full"
                      register={register}
                      placeholder=""
                      type="text"
                    ></InputField>
                    <div className="flex justify-between items-center gap-x-[1.5rem]">
                      <InputField
                        errors={errors}
                        value={invoiceData?.senderAddress?.city}
                        label="City"
                        text="senderCity"
                        register={register}
                        placeholder=""
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        errors={errors}
                        value={invoiceData?.senderAddress?.postCode}
                        label="Post Code"
                        text="senderPostCode"
                        register={register}
                        placeholder=""
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        errors={errors}
                        value={invoiceData?.senderAddress?.country}
                        label="Country"
                        text="senderCountry"
                        register={register}
                        placeholder=""
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
                      errors={errors}
                      value={invoiceData?.clientName}
                      label="Client's Name"
                      text="clientName"
                      register={register}
                      placeholder=""
                      inputStyle="w-full"
                      type="text"
                    />
                    <InputField
                      errors={errors}
                      value={invoiceData?.clientEmail}
                      label="Client's Email"
                      text="clientEmail"
                      register={register}
                      placeholder="e.g. email@example.com"
                      inputStyle="w-full"
                      type="text"
                    />
                    <InputField
                      errors={errors}
                      value={invoiceData?.clientAddress?.street}
                      label="Street Address"
                      text="clientStreet"
                      register={register}
                      placeholder=""
                      inputStyle="w-full"
                      type="text"
                    />
                    <div className="flex justify-between items-center gap-x-[1.5rem]">
                      <InputField
                        errors={errors}
                        value={invoiceData?.senderAddress?.city}
                        label="City"
                        text="clientCity"
                        register={register}
                        placeholder=""
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        errors={errors}
                        value={invoiceData?.clientAddress?.postCode}
                        label="Post Code"
                        text="clientPostCode"
                        register={register}
                        placeholder=""
                        inputStyle="w-full"
                        type="text"
                      />
                      <InputField
                        errors={errors}
                        value={invoiceData?.clientAddress?.country}
                        label="Country"
                        text="clientCountry"
                        placeholder=""
                        register={register}
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" mt-[3rem]">
                    <div className="flex justify-between items-center gap-x-[1.5rem]">
                      <InputField
                        errors={errors}
                        value={invoiceData?.paymentDue}
                        label="Invoice Date"
                        text="date"
                        register={register}
                        placeholder=""
                        inputStyle="w-full"
                        type="Date"
                      />
                      <InputField
                        errors={errors}
                        value={invoiceData?.paymentTerms}
                        label="Payment Terms"
                        text="paymentTerms"
                        register={register}
                        placeholder=""
                        input={
                          <PaymentSelect
                            paymentList={payment_type}
                            selected={selected}
                            setSelected={setSelected}
                          ></PaymentSelect>
                        }
                      ></InputField>
                    </div>
                    <InputField
                      errors={errors}
                      value={invoiceData?.description}
                      label="Project Description"
                      text="description"
                      register={register}
                      placeholder=""
                      inputStyle="w-full"
                      type="text"
                    />
                  </div>

                  <div className=" mt-[2rem] ">
                    <p className="font-bold text-[rgba(119,127,152,1)]">
                      Item List
                    </p>
                    <div className="text-left flex text-[.7rem] text-[rgba(126,136,195,1)] justify-between items-center text-[rgba(126,136,195,1) mt-[1.5rem]">
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
                    {invoiceItems?.map(
                      ({ name, quantity, price, total }, idx) => {
                        return (
                          <EditListItem
                            errors={errors}
                            value={name || `item${idx}`}
                            register={register}
                            key={`item${idx}`}
                            itemName={`item${idx}`}
                            qty={quantity}
                            price={price}
                            total={total}
                          />
                        );
                      }
                    )}

                    <button
                      onClick={addItem}
                      className="mt-[2.188rem] w-full text-[.75rem] text-[rgba(126,136,195,1)] hover:bg-[rgba(223,227,250,1)] transition-all py-4 rounded-full font-bold flex justify-center items-center"
                    >
                      <img src="/assets/icon-plus.svg" alt="plus icon" />
                      Add New Item
                    </button>

                    <div className="mt-[2rem] font-semibold text-[0.625rem] text-[rgba(236,87,87,1)]">
                      <TransitionComponent as="div">
                        {Object.keys(errors).length > 0 && (
                          <p>- All fields must be added</p>
                        )}
                      </TransitionComponent>
                      <TransitionComponent as="div">
                        {itemsError && <p>- An item must be added</p>}
                      </TransitionComponent>
                    </div>

                    <div className="flex text-[.75rem] gap-x-[.5rem] mt-[2.75rem] justify-end ">
                      {invoiceData && Object.keys(invoiceData).length > 0 ? (
                        <>
                          <button
                            onClick={closeModal}
                            className="font-bold h-[3rem] text-[rgba(126,136,195,1)] py-[.52rem] px-[1.25rem] hover:bg-[rgba(223,227,250,1)] transition-all rounded-full "
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSubmit(handleEditInvoice)}
                            className="text-white text-[.75rem] font-bold h-[3rem] py-[.52rem] px-[1.25rem] hover:bg-[rgba(146,119,255,1)] transition-all rounded-full bg-[rgba(124,93,250,1)]"
                          >
                            Save Changes
                          </button>
                        </>
                      ) : (
                        <div className="flex justify-between w-full">
                          <button
                            onClick={() => {
                              closeModal(true);
                            }}
                            className="text-[rgba(126,136,195,1)] text-[.75rem] font-bold h-[3rem] py-[.52rem] px-[1.25rem] hover:bg-[rgba(223,227,250,1)] transition-all rounded-full "
                          >
                            Discard
                          </button>
                          <div className="flex gap-x-[.5rem]">
                            <button className="font-bold py-[.5rem] h-[3rem] px-[1.25rem] bg-[rgba(55,59,83,1)] rounded-full text-[rgb(136,142,176)] dark:text-[rgba(223,227,250,1)] transition-all dark:hover:bg-[rgba(30,33,57,1)] hover:bg-[rgba(12,14,22,1)]">
                              Save as Draft
                            </button>
                            <button
                              onClick={handleSubmit(handleAddInvoice)}
                              className="text-white text-[.75rem] font-bold h-[3rem] py-[.52rem] px-[1.25rem] hover:bg-[rgba(146,119,255,1)] transition-all rounded-full bg-[rgba(124,93,250,1)]"
                            >
                              Save & Send
                            </button>
                          </div>
                        </div>
                      )}
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

export default InvoiceEditAdd;
