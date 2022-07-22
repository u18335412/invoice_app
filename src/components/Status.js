const Status = ({ status }) => {
  return (
    <p
      className={`w-[6.5rem] h-[2.5rem] text-center text-[0.7rem] py-[.8rem] rounded-md justify-center  flex items-center font-bold gap-x-[.5rem]
        ${
          status === "paid"
            ? "text-[rgba(51,214,159,1)] bg-[rgba(51,214,159,1)]/5 "
            : status === "pending"
            ? "text-[rgba(255,143,0,1)] bg-[rgba(255,143,0,1)]/5"
            : "text-[rgba(55,_59,_83,_1)] dark:bg-[rgba(223,227,250,1)]/5 dark:text-[rgba(223,227,250,1)] bg-[rgba(55,59,83,1)]/5"
        }
         [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]`}
    >
      <span
        className={`w-2 h-2 rounded-full
          ${
            status === "paid"
              ? "bg-[rgba(51,214,159,1)]"
              : status === "pending"
              ? "bg-[rgba(255,143,0,1)]"
              : "bg-[rgba(55,59,83,1)] dark:bg-[rgba(223,227,250,1)]"
          }`}
      ></span>
      <span className="">{status}</span>
    </p>
  );
};

export default Status;
