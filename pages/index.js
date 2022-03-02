/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Contanier from "../src/components/container";
import Invoice from "../src/components/invoice";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <main className="">
        <Contanier>
          <div className="flex justify-between xl:pt-[4.5rem] md:pt-[3.5rem]">
            <div>
              <p className=" font-bold text-[2rem]">Invoices</p>
              <p className=" text-[0.75rem] text-[rgba(136,142,176,1)]">
                There are 7 total invoices
              </p>
            </div>
            <div className="flex gap-x-[2.5rem] items-center">
              <div className="flex items-center font-bold text-[0.75rem] w-[7.375rem] gap-x-[1rem]">
                <p>filter by status</p>
                <img
                  src="/assets/icon-arrow-down.svg"
                  className="  w-[0.529rem] h-[0.264rem]"
                  alt="arrow down"
                />
              </div>
              <div>
                <button className="flex text-[0.75rem] gap-x-[1rem] w-[9.375rem] font-bold text-white bg-[rgb(124,93,250)] rounded-[24px] items-center p-[8px]">
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

          <div className="mt-[3.5rem] space-y-[1rem]">
            {data.length > 1 ? (
              data.map((invoice) => {
                return <Invoice key={invoice?.id} invoice={invoice}></Invoice>;
              })
            ) : (
              <div className="flex justify-center items-center mt-[8.813rem]">
                <div className=" w-[15.125rem] text-center">
                  <img
                    src="/assets/illustration-empty.svg"
                    className="w-[15.084rem] h-[12.5rem]"
                    alt="illustration"
                  />
                  <p className=" font-bold text-[1.25rem] mt-[4rem]">
                    There is nothing here
                  </p>
                  <p className="text-[0.75rem] tracking-[-0.25px] mt-[1.5rem] text-[rgba(136,142,176,1)]">
                    Create an invoice by clicking the
                    <span className="font-bold"> New Invoice </span>
                    button and get started.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Contanier>
      </main>
    </>
  );
}
