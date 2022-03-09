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
          <div className="flex items-center gap-x-[1rem] w-fit">
            <p>Status</p>
            <Status status={invoiceData?.status} />
          </div>
          <div className="flex gap-x-[.5rem] w-fit">
            <button
              onClick={() => setEditIsOpen(true)}
              className="text-[rgba(126,136,195,1)] rounded-full transition-all dark:text-[rgba(223,227,250,1)] dark:bg-[rgba(37,41,69,1)] w-[4.563rem] [h-3rem] hover:bg-[rgba(223,227,250,1)] text-[.75rem] hover:dark:bg-white hover:dark:text-[rgba(37,41,69,1)] font-bold px-[1.2rem]"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteIsOpen(true)}
              className=" font-bold text-[0.75rem] px-[1.5rem] text-white rounded-full bg-[rgba(236,87,87,1)] hover:bg-[rgba(255,151,151,1)] transition-all py-[1rem] h-[3rem]"
            >
              Delete
            </button>
            <button
              onClick={() => markAsStatus(invoiceData?.id)}
              className=" font-bold px-[1.5rem] py-[1rem] bg-[rgba(124,93,250,1)] rounded-full h-[3rem] transition-all hover:bg-[rgba(146,119,255,1)] text-white text-[0.75rem]"
            >
              {invoiceData?.status === "paid"
                ? "Mark as Pending"
                : "Mark as Paid"}
            </button>
          </div>
        </div>
        <div className="p-[3rem] mt-[1.5rem]">
          <div className="flex justify-between ">
            <div className="">
              <p className="font-bold">
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
              <p className="flex flex-col text-right dark:text-[rgba(223,227,250,1)]  text-[.7rem] text-[rgba(126,136,195,1)]">
                <span>{invoiceData?.senderAddress?.street}</span>
                <span>{invoiceData?.senderAddress?.city}</span>
                <span>{invoiceData?.senderAddress?.postCode}</span>
                <span>{invoiceData?.senderAddress?.country}</span>
              </p>
            </div>
          </div>
          <div className="flex mt-[3.063rem] md:justify-between">
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
            <div>
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
          <div className=" md:mt-[3rem]">
            <div className="p-[2rem] w-full rounded-t-lg dark:bg-[rgba(37,41,69,1)]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left ">
                      <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
                        Item name
                      </span>
                    </th>
                    <th className="text-center ">
                      <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
                        QTY.
                      </span>
                    </th>
                    <th className="text-right ">
                      <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
                        Price
                      </span>
                    </th>
                    <th className="text-right ">
                      <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
                        Total
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData?.items?.map(
                    ({ name, quantity, price, total }) => (
                      <tr
                        className=""
                        key={invoiceData?.clientName?.name + name}
                      >
                        <td className=" pt-[2rem] font-bold text-[.75rem] w-[13.25rem]">
                          {name}
                        </td>
                        <td className=" text-center pt-[2rem]">
                          <span className="text-[rgba(126,136,195,1)] font-bold dark:text-[rgba(223,227,250,1)] text-[.75rem]">
                            {quantity}
                          </span>
                        </td>
                        <td className="text-right pt-[2rem] ">
                          <span className="text-[rgba(126,136,195,1)] font-bold dark:text-[rgba(223,227,250,1)] text-[.75rem]">
                            £ {price}
                          </span>
                        </td>
                        <td className="text-right pt-[2rem]">
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
