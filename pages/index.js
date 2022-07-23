/* eslint-disable @next/next/no-img-element */
import Contanier from "/src/components/Containers";
import Invoice from "/src/components/Invoice";
import FilterPopover from "../src/components/FilterPopover";
import { useState } from "react";
import InvoiceEditAdd from "../src/components/InvoiceEditAdd";
import NoInvoiceFound from "../src/components/NoInvoiceFound";
import useStore from "../src/store/zuestand";

export default function Home() {
  const invoices = useStore((state) => state.invoices);
  const [filter, setFilter] = useState("");
  const [newInvoiceData, setNewInvoiceData] = useState({});
  let [isAddOpen, setAddIsOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen xl:pt-[4.5rem] md:pt-[3.5rem] py-[6.5rem] md:flex justify-center">
        <Contanier>
          {isAddOpen && (
            <InvoiceEditAdd
              closeModal={() => setAddIsOpen(false)}
              isOpen={isAddOpen}
              invoiceData={newInvoiceData}
              setData={setNewInvoiceData}
            />
          )}

          <div className="flex justify-between md:w-[730px]">
            <div>
              <p className=" font-bold md:text-[2rem] text-[1.2rem]">
                Invoices
              </p>
              <p className=" hidden md:flex text-[0.75rem] dark:text-white text-[rgba(136,142,176,1)]">
                There are {invoices.length} total invoices
              </p>
              <p className=" md:hidden  text-[0.75rem] dark:text-white text-[rgba(136,142,176,1)]">
                {invoices.length} Invoices
              </p>
            </div>
            <div className="flex gap-x-[1.13rem] md:gap-x-[2.5rem] items-center">
              <FilterPopover
                setFilter={setFilter}
                filter={filter}
              ></FilterPopover>
              <div>
                <button
                  onClick={() => setAddIsOpen(true)}
                  className="flex md:hidden text-[0.75rem] w-[5.625rem] gap-x-[.5rem] md:w-[9.375rem] font-bold text-white transition-all hover:bg-[rgba(146,119,255,1)] bg-[rgb(124,93,250)] rounded-[24px] items-center p-[6px]"
                >
                  <div className="flex bg-white w-[32px] h-[32px] items-center justify-center rounded-full">
                    <img
                      src="/assets/icon-plus.svg"
                      className="w-[10px] h-[10px] rounded-full"
                      alt="check icon"
                    ></img>
                  </div>
                  New
                </button>
                <button
                  onClick={() => setAddIsOpen(true)}
                  className="md:flex hidden text-[0.75rem] w-[5.625rem] gap-x-[1rem] md:w-[9.375rem] font-bold text-white transition-all hover:bg-[rgba(146,119,255,1)] bg-[rgb(124,93,250)] rounded-[24px] items-center p-[8px]"
                >
                  <div className="flex bg-white w-[32px] h-[32px] items-center justify-center rounded-full">
                    <img
                      src="/assets/icon-plus.svg"
                      className="w-[10px] h-[10px] rounded-full"
                      alt="check icon"
                    ></img>
                  </div>
                  New Invoice
                </button>
              </div>
            </div>
          </div>

          <ul className="mt-[3.5rem] space-y-[1rem]">
            {invoices.length > 0 ? (
              invoices.map((invoice) => {
                if (
                  filter === "" ||
                  (filter !== "" &&
                    invoice.status === filter.toLocaleLowerCase())
                )
                  return (
                    <Invoice
                      key={invoice?.id}
                      filter={filter}
                      invoice={invoice}
                    />
                  );
              })
            ) : (
              <>
                <NoInvoiceFound></NoInvoiceFound>
              </>
            )}
          </ul>
        </Contanier>
      </main>
    </>
  );
}
