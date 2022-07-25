/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import TransitionComponent from "./TransitionComponent";
import Status from "./Status";
import { useRouter } from "next/router";

const Invoice = ({
  invoice: { id, paymentDue, clientName, total, status },
  filter,
}) => {
  const [showing] = useState(filter === "" || status === filter.toLowerCase());
  const router = useRouter();

  const showDecimal = (number) =>
    number?.toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: 2,
    });

  return (
    <TransitionComponent showing={showing}>
      <li
        onClick={() => router.push(`invoice/${id}`)}
        tabIndex={0}
        className="md:w-[730px] bg-white rounded-[.5rem] px-[1.5rem] items-center h-[8.375rem] md:h-[4.5rem] transition-all cursor-pointer hover:ring-1 hover:ring-[rgb(124,93,250)] dark:bg-[rgba(30,33,57,1)]
      [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.100397)]
  "
      >
        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-y-0 gap-y-[1.5rem] place-items-center h-full ">
          <p className="font-bold text-[0.75rem] w-full md:place-self-auto place-self-end">
            <span className="text-[rgba(126,136,195,1)] ">#</span>
            {id}
          </p>
          <p className="text-[0.75rem] md:mr-11 w-full hidden md:inline text-left w-ft dark:text-white text-[rgba(126,136,195,1)]">
            Due &nbsp;
            {new Date(paymentDue).toLocaleString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-[0.75rem] place-self-end md:place-self-center dark:text-white md:mr-10  block truncate text-[rgba(126,136,195,1)] md:w-full">
            {clientName}
          </p>
          <div className="flex flex-col w-full text-right gap-y-2 tex md:inline ">
            <p className="text-[0.75rem] md:hidden text-left w-fit dark:text-white text-[rgba(126,136,195,1)]">
              Due{"  "}
              {new Date(paymentDue).toLocaleString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <span className="text-base font-bold text-left truncate md:text-right md:block md:mr-10">
              {" "}
              £ {showDecimal(total)}
            </span>
          </div>
          <div className="place-self-end flex md:items-center items-center md:place-self-start md:w-full h-full gap-x-[1.25rem]">
            <Status status={status} />
            <img
              src="/assets/icon-arrow-right.svg"
              className="flex-grow-0 hidden w-2 h-3 md:inline"
              alt="arrow right"
            />
          </div>
        </div>
      </li>
    </TransitionComponent>
  );
};

export default Invoice;
