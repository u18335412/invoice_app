/* eslint-disable @next/next/no-img-element */
import Contanier from "../../src/components/container";
import Link from "next/link";
import InvoiceEditAdd from "../../src/components/invoice_edit";
import { useState } from "react";
import DeleteModal from "../../src/components/delete_modal";
import data from "../../data.json";

const ViewInvoice = () => {
  let [isEditOpen, setEditIsOpen] = useState(false);
  let [isDeleteOpen, setDeleteIsOpen] = useState(false);

  const [invoiceData, setData] = useState(data[0]);

  return (
    <main className="pt-[4rem]">
      <Contanier>
        <InvoiceEditAdd
          closeModal={() => setEditIsOpen(false)}
          isOpen={isEditOpen}
          invoiceData={invoiceData}
          setData={setData}
        />
        <DeleteModal
          closeModal={() => setDeleteIsOpen(false)}
          isOpen={isDeleteOpen}
        />
        <Link href="/" passHref>
          <button className="flex text-[0.75rem] items-center justify-center font-bold gap-x-[1.75rem]">
            <img
              src="/assets/icon-arrow-left.svg"
              className="w-2 h-2"
              alt="arrow left"
            />
            Go back
          </button>
        </Link>

        <div className="mt-[2rem] text-[.75rem] px-[2rem] py-[1.25rem] justify-between flex rounded-[.5rem] ">
          <div className="flex items-center gap-x-[1rem] w-fit">
            <p>Status</p>
            <div className="w-full px-[1.125rem]  flex items-center font-bold gap-x-[.5rem] [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]">
              <span className="w-2 h-2 rounded-full bg-[rgba(255,143,0,1)]"></span>
              <p className="text-[rgba(255,143,0,1)]">Pending</p>
            </div>
          </div>
          <div className="flex gap-x-[.5rem] w-fit">
            <button
              onClick={() => setEditIsOpen(true)}
              className="text-[rgba(126,136,195,1)] rounded-full transition-all w-[4.563rem] [h-3rem] hover:bg-[rgba(223,227,250,1)] text-[.75rem] font-bold px-[1.2rem]"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteIsOpen(true)}
              className=" font-bold text-[0.75rem] px-[1.5rem] text-white rounded-full bg-[rgba(236,87,87,1)] py-[1rem] h-[3rem]"
            >
              Delete
            </button>
            <button className=" font-bold px-[1.5rem] py-[1rem] bg-[rgba(124,93,250,1)] rounded-full transition-all hover:bg-[rgba(146,119,255,1)] text-white text-[0.75rem]">
              Mark as Paid
            </button>
          </div>
        </div>

        <div className="p-[3rem] mt-[1.5rem]">
          <div className="flex justify-between ">
            <div className="">
              <p className="font-bold">
                <span className="text-[rgba(136,142,176,1)]">#</span>
                XM9141
              </p>
              <p className="text-[.75rem] text-[rgba(126,136,195,1)]">
                Graphic Design
              </p>
            </div>
            <div className="flex">
              <p className="flex flex-col text-right text-[.75rem] text-[rgba(126,136,195,1)]">
                <span>19 Union Terrace</span>
                <span>London</span>
                <span>E1 3EZ</span>
                <span>United Kingdom</span>
              </p>
            </div>
          </div>
          <div className="flex mt-[3.063rem] md:justify-between">
            <div className="space-y-[2rem]">
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)] text-[.75rem]">
                  Invoice Date
                </span>
                <span className="font-bold">21 Aug 2021</span>
              </p>
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)] text-[.75rem]">
                  Payment Date
                </span>
                <span className="font-bold">20 Sep 2021</span>
              </p>
            </div>
            <div>
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)] text-[.75rem]">
                  Bill To
                </span>
                <span className="font-bold">Alex Grim</span>
                <span className="text-[rgba(126,136,195,1)] text-[.75rem] flex flex-col">
                  <span>84 Church Way</span>
                  <span>Bradford</span>
                  <span>BD1 9PB</span>
                  <span>United Kingdom</span>
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col gap-y-[.75rem] w-fit">
                <span className="text-[rgba(126,136,195,1)] text-[.75rem]">
                  Sent To
                </span>
                <span className="font-bold">alexgrim@mail.com</span>
              </p>
            </div>
          </div>
          <div className=" md:mt-[3rem]">
            <div className="p-[2rem] w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left ">
                      <span className="text-[rgba(126,136,195,1)] font-normal text-[.75rem]">
                        Item name
                      </span>
                    </th>
                    <th className="text-center ">
                      <span className="text-[rgba(126,136,195,1)] font-normal text-[.75rem]">
                        QTY.
                      </span>
                    </th>
                    <th className="text-right ">
                      <span className="text-[rgba(126,136,195,1)] font-normal text-[.75rem]">
                        Price
                      </span>
                    </th>
                    <th className="text-right ">
                      <span className="text-[rgba(126,136,195,1)] font-normal text-[.75rem]">
                        Total
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className=" pt-[2rem] font-bold text-[.75rem] w-[13.25rem]">
                      Banner Design
                    </td>
                    <td className=" text-center pt-[2rem]">
                      <span className="text-[rgba(126,136,195,1)] font-bold text-[.75rem]">
                        1
                      </span>
                    </td>
                    <td className="text-right pt-[2rem] ">
                      <span className="text-[rgba(126,136,195,1)] font-bold text-[.75rem]">
                        £ 156.00
                      </span>
                    </td>
                    <td className="text-right pt-[2rem]">
                      <span className=" font-bold text-[.75rem]">£ 156.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[rgba(55,59,83,1)] p-[2rem] w-full h-[5rem] rounded-b-[8px] flex items-center text-white justify-between">
              <p className=" text-[0.74rem]">Amount Due</p>
              <p className="font-bold text-[1.5rem]">£ 556.00</p>
            </div>
          </div>
        </div>
      </Contanier>
    </main>
  );
};

export default ViewInvoice;
