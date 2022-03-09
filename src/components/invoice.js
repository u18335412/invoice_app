/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import TransitionComponent from "./transition_component";
import Status from "./status_componet";
import { useRouter } from "next/router";

const Invoice = ({
  invoice: { id, paymentDue, clientName, total, status },
  filter,
}) => {
  const [showing, setShowing] = useState(
    filter === "" || status === filter.toLowerCase()
  );
  const router = useRouter();

  return (
    <TransitionComponent showing={showing}>
      <li
        onClick={() => router.push(`invoice/${id}`)}
        tabIndex={0}
        className="w-full flex justify-between rounded-[.5rem] px-[1.5rem] items-center h-[4.5rem] gap-x-[1.25rem] transition-all cursor-pointer hover:ring-1 hover:ring-[rgb(124,93,250)] dark:bg-[rgba(30,33,57,1)]
        [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.100397);]
    "
      >
        <div className="flex items-center justify-between flex-1">
          <p className="font-bold text-[0.75rem]">
            <span className="text-[rgba(126,136,195,1)] ">#</span>
            {id}
          </p>
          <p className="text-[0.75rem] text-left w-fit dark:text-white text-[rgba(126,136,195,1)]">
            Due {paymentDue}
          </p>
          <p className="text-[0.75rem] dark:text-white  text-[rgba(126,136,195,1)]">
            {clientName}
          </p>
          <p className="text-base font-bold ">£ {total?.toString()}</p>
          <Status status={status} />
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
