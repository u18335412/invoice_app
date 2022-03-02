/* eslint-disable @next/next/no-img-element */
const Invoice = ({
  invoice: { id, paymentDue, clientName, total, status },
}) => {
  return (
    <div
      className="w-full flex justify-between rounded-[.5rem] px-[1.5rem] items-center h-[4.5rem] gap-x-[1.25rem]
        [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.100397);]
    "
    >
      <div className=" flex  flex-1 justify-between">
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
        <p className=" font-bold text-base">£ {total.toString()}</p>
        <p
          className={` w-[6.5rem] text-center font-bold ${
            status === "paid"
              ? "text-[rgba(51,214,159,1)]"
              : "text-[rgba(255,143,0,1)]"
          } flex justify-center items-center gap-x-[.5rem]`}
        >
          <span
            className={` ${
              status === "paid"
                ? "bg-[rgba(51,214,159,1)]"
                : "bg-[rgba(255,143,0,1)]"
            } w-[0.5rem] h-[0.5rem] rounded-full`}
          ></span>
          {status}
        </p>
      </div>
      <img
        src="/assets/icon-arrow-right.svg"
        className="w-2 h-3 flex-grow-0"
        alt="arrow right"
      />
    </div>
  );
};

export default Invoice;
