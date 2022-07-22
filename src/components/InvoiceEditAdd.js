/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useInvoice } from "../../utils/invoice_actions";
import { useForm, useFieldArray } from "react-hook-form";
import PaymentSelect from "./PaymentSelect";
import TransitionComponent from "./TransitionComponent";
import useStore from "../store/theme";
import BackButton from "./BackButton";
import InputField from "./InputField";
import EditListItem from "./EditListItem";

const InvoiceEditAdd = ({ isOpen, closeModal, invoiceData }) => {
  const { isDark } = useStore();
  const payment_type = [1, 7, 14, 30];
  const [selected, setSelected] = useState(payment_type[0]);
  const { editInvoice, addInvoice } = useInvoice();
  const {
    register,
    handleSubmit,
    unregister,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: invoiceData?.items || [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const [itemsError, setItemsError] = useState(false);
  const handleEditInvoice = (data) => {
    setItemsError(false);
    if (fields < 1) {
      setItemsError(true);
      return;
    }
    editInvoice({
      ...data,
      id: invoiceData.id,
      paymentTerms: selected,
      status: invoiceData.status,
    });
    closeModal();
  };

  const saveAsDraft = () => {
    setItemsError(false);
    const data = getValues();
    addInvoice({
      ...data,
      paymentTerms: selected,
      status: "draft",
      items: data.items,
    });
    closeModal();
  };

  const handleAddInvoice = (data) => {
    setItemsError(false);
    data.items.length < 1
      ? setItemsError(true)
      : addInvoice({ ...data, status: "pending", paymentTerms: selected });
  };

  const addItem = () =>
    append({ name: "", quantity: "", price: "", total: "" });

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
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
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
                <div className="absolute bg-white dark:bg-[rgba(20,22,37,1)] xl:w-[44.938rem] inset-0 z-[1] px-[1.5rem] h-screen md:px-[3.5rem] xl:pl-[9.938rem] xl:pr-[3.5rem] pt-[6.5rem] md:pt-[8.5rem] xl:pt-[3.5rem] md:w-[38.5rem] md:rounded-r-[1.25rem] pb-[2rem] overflow-y-auto">
                  {invoiceData && Object.keys(invoiceData).length !== 0 && (
                    <span className="md:hidden">
                      <BackButton />
                    </span>
                  )}
                  <p className="font-bold text-[1.5rem] dark:text-white pt-[1.5rem] md:pt-0">
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
                    <div className="md:flex grid grid-cols-2 justify-between items-center gap-x-[1.45rem]">
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
                        container="col-span-2"
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
                    <div className="md:flex grid grid-cols-2 justify-between items-center gap-x-[1.5rem]">
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
                        container="col-span-2"
                        register={register}
                        inputStyle="w-full"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" mt-[3rem]">
                    <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-x-[1.5rem]">
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

                  <div className=" mt-[2rem]">
                    <p className="font-bold text-[rgba(119,127,152,1)]">
                      Item List
                    </p>
                    <div className="text-left md:flex  hidden text-[.7rem] text-[rgba(126,136,195,1)] justify-between items-center mt-[1.5rem]">
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

                    <div className="mt-[1.5rem] flex flex-col gap-y-12 md:gap-y-[1.13rem] md:mt-[1rem]">
                      {fields.map(
                        ({ name, quantity, price, total, id }, idx) => {
                          return (
                            <EditListItem
                              errors={errors}
                              value={name || ""}
                              register={register}
                              key={id}
                              itemName={`items.${idx}`}
                              qty={quantity}
                              price={price}
                              total={total}
                              idx={idx}
                              unregister={unregister}
                              removeItem={remove}
                            />
                          );
                        }
                      )}
                    </div>

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

                    {invoiceData && Object.keys(invoiceData).length > 0 ? (
                      <>
                        <div className="flex text-[.75rem] gap-x-[.5rem] mt-[2.75rem] justify-end md:bg-inherit bg-white dark:bg-[rgba(30,33,57,1)] absolute md:relative w-full left-0 dark:md:bg-inherit px-[1.5rem] md:py-0 md:px-0 py-[1.313rem]">
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
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between gap-x-2 w-full md:dark:bg-inherit bg-white dark:bg-[rgba(30,33,57,1)] absolute md:relative h-fit left-0 px-[1.5rem] md:py-0 md:px-0 py-[1.313rem]">
                        <button
                          onClick={() => {
                            closeModal(true);
                          }}
                          className="text-[rgba(126,136,195,1)] text-[.7rem] font-bold h-[3rem] py-[.52rem] px-[1.25rem] hover:bg-[rgba(223,227,250,1)] md:bg-inherit bg-[rgba(37,41,69,1)] transition-all w-[84px] rounded-full "
                        >
                          Discard
                        </button>
                        <div className="flex gap-x-[.5rem]">
                          <button
                            onClick={saveAsDraft}
                            className="font-bold py-[.5rem] h-[3rem] md:px-[1.25rem] bg-[rgba(55,59,83,1)] rounded-full text-[rgb(136,142,176)] dark:text-[rgba(223,227,250,1)] transition-all text-[0.7rem] dark:hover:bg-[rgba(30,33,57,1)] px-4 hover:bg-[rgba(12,14,22,1)]"
                          >
                            Save as Draft
                          </button>
                          <button
                            onClick={handleSubmit(handleAddInvoice)}
                            className="text-white text-[.7rem] font-bold h-[3rem] py-[.52rem] px-4 md:px-[1.25rem] hover:bg-[rgba(146,119,255,1)] transition-all  rounded-full bg-[rgba(124,93,250,1)]"
                          >
                            Save & Send
                          </button>
                        </div>
                      </div>
                    )}
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
