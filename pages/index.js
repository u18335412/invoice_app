/* eslint-disable @next/next/no-img-element */
import Contanier from "../src/components/container";
import Invoice from "../src/components/invoice";
import data from "../data.json";
import FilterPopover from "../src/components/filter_popover";
import { useEffect, useState } from "react";
import InvoiceEditAdd from "../src/components/invoice_edit";
import NoInvoiceFound from "../src/components/no_invoice_found";

export default function Home() {
  const [filtered, setFilterd] = useState(data);
  const [filter, setFilter] = useState("");
  const [newInvoiceData, setNewInvoiceData] = useState({});
  let [isAddOpen, setAddIsOpen] = useState(false);

  useEffect(() => {
    setFilterd(
      data.filter(
        (invoice) =>
          filter === "" ||
          (filter !== "" && invoice.status === filter.toLocaleLowerCase())
      )
    );
  }, [filter, setFilter]);

  return (
    <>
      <main className="">
        <Contanier>
          <InvoiceEditAdd
            closeModal={() => setAddIsOpen(false)}
            isOpen={isAddOpen}
            invoiceData={newInvoiceData}
            setData={setNewInvoiceData}
          />
          <div className="flex justify-between xl:pt-[4.5rem] md:pt-[3.5rem]">
            <div>
              <p className=" font-bold text-[2rem]">Invoices</p>
              <p className=" text-[0.75rem] text-[rgba(136,142,176,1)]">
                There are 7 total invoices
              </p>
            </div>
            <div className="flex gap-x-[2.5rem] items-center">
              <FilterPopover
                setFilter={setFilter}
                filter={filter}
              ></FilterPopover>
              <div>
                <button
                  onClick={() => setAddIsOpen(true)}
                  className="flex text-[0.75rem] gap-x-[1rem] w-[9.375rem] font-bold text-white transition-all hover:bg-[rgba(146,119,255,1)] bg-[rgb(124,93,250)] rounded-[24px] items-center p-[8px]"
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
            {filtered.length > 0 ? (
              filtered.map((invoice) => {
                return (
                  <Invoice
                    filter={filter}
                    key={invoice?.id}
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
