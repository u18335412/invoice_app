/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import TransitionComponent from "./transition_component";

const Invoice = ({
  invoice: { id, paymentDue, clientName, total, status },
  filter,
}) => {
  const [showing, setShowing] = useState(
    filter === "" || status === filter.toLowerCase()
  );

  return (
    <TransitionComponent showing={showing}>
      <li
        tabIndex={0}
        className="w-full flex justify-between rounded-[.5rem] px-[1.5rem] items-center h-[4.5rem] gap-x-[1.25rem] transition-all cursor-pointer hover:ring-1 hover:ring-[rgb(124,93,250)]
        [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.100397);]
    "
      >
        <div className="flex items-center justify-between flex-1">
          <p className="font-bold text-[0.75rem]">
            <span className="text-[rgba(126,136,195,1)] ">#</span>
            {id}
          </p>
          <p className="text-[0.75rem] text-left w-fit text-[rgba(126,136,195,1)]">
            Due {paymentDue}
          </p>
          <p className="text-[0.75rem] text-[rgba(126,136,195,1)]">
            {clientName}
          </p>
          <p className="text-base font-bold ">£ {total.toString()}</p>
          <p
            className={` w-[6.5rem] py-[.8rem] rounded-[6px] text-center font-bold ${
              status === "paid"
                ? "text-[rgba(51,214,159,1)] bg-[rgba(51,214,159,1)]/5 "
                : status === "pending"
                ? "text-[rgba(255,143,0,1)] bg-[rgba(255,143,0,1)]/5"
                : "text-[rgba(55,_59,_83,_1)] bg-[rgba(55,59,83,1)]/5"
            } flex justify-center items-center gap-x-[.5rem]`}
          >
            <span
              className={` ${
                status === "paid"
                  ? "bg-[rgba(51,214,159,1)]"
                  : status === "pending"
                  ? "bg-[rgba(255,143,0,1)]"
                  : "bg-[rgba(55,59,83,1)]"
              } w-[0.5rem] h-[0.5rem] rounded-full`}
            ></span>
            {status}
          </p>
        </div>
        <img
          src="/assets/icon-arrow-right.svg"
          className="flex-grow-0 w-2 h-3"
          alt="arrow right"
        />
      </li>
    </TransitionComponent>
  );
};

export default Invoice;
