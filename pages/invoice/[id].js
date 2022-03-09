/* eslint-disable @next/next/no-img-element */
import Contanier from "../../src/components/container";
import Link from "next/link";
import InvoiceEditAdd from "../../src/components/invoice_edit";
import { useState } from "react";
import DeleteModal from "../../src/components/delete_modal";
import useStore from "../../src/store/zuestand";
import { useRouter } from "next/router";
import { useInvoice } from "../../utils/invoice_actions";
import Status from "../../src/components/status_componet";
import DeleteButton from "../../src/components/delete_button";
import EditButton from "../../src/components/edit_button";
import StatusToggle from "../../src/components/toggle_status_button";
import TableHeader from "../../src/components/table_row_header";

const ViewInvoice = () => {
  const router = useRouter();
  const { id } = router.query;
  const { deleteInvoice, markAsStatus } = useInvoice();
  let [isEditOpen, setEditIsOpen] = useState(false);
  let [isDeleteOpen, setDeleteIsOpen] = useState(false);

  const invoiceData = useStore(
    (state) => state.invoices.filter((i) => i.id == id)[0]
  );

  const handleDelete = () => {
    deleteInvoice(id);
    setDeleteIsOpen(false);
    router.push("/");
  };

  return (
    <main className="pt-[4rem] min-h-screen">
      <Contanier>
        <InvoiceEditAdd
          closeModal={() => setEditIsOpen(false)}
          isOpen={isEditOpen}
          invoiceData={invoiceData}
        />
        <DeleteModal
          closeModal={() => setDeleteIsOpen(false)}
          isOpen={isDeleteOpen}
          invoiceId={id}
          handleDelete={handleDelete}
        />

        <Link href="/" passHref>
          <button className="flex text-[0.7rem] items-center justify-center font-bold gap-x-[1.75rem]">
            <img
              src="/assets/icon-arrow-left.svg"
              className="w-2 h-2"
              alt="arrow left"
            />
            Go back
          </button>
        </Link>
        <div className="mt-[2rem] text-[.7rem] dark:bg-[rgba(30,33,57,1)] px-[2rem] py-[1.25rem] justify-between flex rounded-[.5rem] ">
          <div className="flex justify-between md:justify-start w-full items-center gap-x-[1rem] md:w-fit">
            <p>Status</p>
            <Status status={invoiceData?.status} />
          </div>
          <div className="md:flex gap-x-[.5rem] w-fit hidden">
            <EditButton setEditIsOpen={setEditIsOpen} />
            <DeleteButton setDeleteIsOpen={setDeleteIsOpen} />
            <StatusToggle
              invioceStatus={invoiceData?.status}
              invoiceId={invoiceData?.id}
              markAsStatus={markAsStatus}
            ></StatusToggle>
          </div>
        </div>
        <div className="md:p-[3rem] rounded-lg p-[1.5rem] mt-[1.5rem] dark:bg-[rgba(30,33,57,1)]">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-y-0 gap-y-[1.875rem]">
            <div className="">
              <p className="font-bold text-[0.7rem]">
                <span className="text-[rgba(136,142,176,1)] dark:text-[rgba(223,227,250,1)]">
                  #
                </span>
                {invoiceData?.id}
              </p>
              <p className="text-[.7rem]  dark:text-[rgba(223,227,250,1)] text-[rgba(126,136,195,1)]">
                {invoiceData?.description}
              </p>
            </div>
            <div className="flex">
              <p className="flex flex-col md:text-right dark:text-[rgba(223,227,250,1)]  text-[.7rem] text-[rgba(126,136,195,1)]">
                <span>{invoiceData?.senderAddress?.street}</span>
                <span>{invoiceData?.senderAddress?.city}</span>
                <span>{invoiceData?.senderAddress?.postCode}</span>
                <span>{invoiceData?.senderAddress?.country}</span>
              </p>
            </div>
          </div>
          <div className="md:flex grid grid-cols-2 gap-x-[2.563rem] mt-[2rem] flex-row md:mt-[3.063rem] md:justify-between">
            <div className="space-y-[2rem]">
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  text-[.75rem]">
                  Invoice Date
                </span>
                <span className="font-bold">
                  {new Date(invoiceData?.createdAt).toLocaleString("default", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
              <p className="flex flex-col gap-y-[.7rem] w-fit">
                <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  text-[.75rem]">
                  Payment Due
                </span>
                <span className="font-bold xl:text-base md:text-[15px]">
                  {new Date(invoiceData?.paymentDue).toLocaleString("default", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  text-[.7rem]">
                  Bill To
                </span>
                <span className="font-bold dark:text-white xl:text-base md:text-[15px]">
                  {invoiceData?.clientName}
                </span>
                <span className="text-[rgba(126,136,195,1)] dark:text-[rgba(223,227,250,1)] text-[.7rem] flex flex-col">
                  <span>{invoiceData?.clientAddress?.street}</span>
                  <span>{invoiceData?.clientAddress?.city}</span>
                  <span>{invoiceData?.clientAddress?.postCode}</span>
                  <span>{invoiceData?.clientAddress?.country}</span>
                </span>
              </p>
            </div>
            <div className="mt-[2rem] md:mt-0">
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  text-[.75rem]">
                  Sent To
                </span>
                <span className="font-bold dark:text-white xl:text-base md:text-[15px]">
                  {invoiceData?.clientEmail}
                </span>
              </p>
            </div>
          </div>
          <div className=" md:mt-[3rem] mt-[2.5rem]">
            <div className="md:p-[2rem] p-[1.5rem] w-full rounded-t-lg dark:bg-[rgba(37,41,69,1)]">
              <table className="w-full">
                <TableHeader />
                <tbody>
                  {invoiceData?.items?.map(
                    ({ name, quantity, price, total }) => (
                      <tr
                        className=""
                        key={invoiceData?.clientName?.name + name}
                      >
                        <td className=" md:pt-[2rem] font-bold text-[.75rem] w-[13.25rem]">
                          {name}
                        </td>
                        <td className=" text-center md:pt-[2rem]">
                          <span className="text-[rgba(126,136,195,1)] font-bold dark:text-[rgba(223,227,250,1)] text-[.75rem]">
                            {quantity}
                          </span>
                        </td>
                        <td className="text-right md:pt-[2rem] ">
                          <span className="text-[rgba(126,136,195,1)] font-bold dark:text-[rgba(223,227,250,1)] text-[.75rem]">
                            £ {price}
                          </span>
                        </td>
                        <td className="text-right md:pt-[2rem]">
                          <span className=" font-bold text-[.75rem]">
                            £ {total}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="bg-[rgba(55,59,83,1)] dark:bg-[rgba(12,14,22,1)] p-[2rem] w-full h-[5rem] rounded-b-[8px] flex items-center text-white justify-between">
              <p className=" text-[0.74rem]">Amount Due</p>
              <p className="font-bold text-[1.5rem]">£ {invoiceData?.total}</p>
            </div>
          </div>
        </div>
      </Contanier>
    </main>
  );
};

export default ViewInvoice;
