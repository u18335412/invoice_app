const StatusToggleButton = ({ markAsStatus, invoiceId, invoiceStatus }) => {
  return (
    <button
      disabled={invoiceStatus === "draft"}
      onClick={() => markAsStatus(invoiceId)}
      className=" font-bold px-4 md:px-[1.5rem] py-[1rem] bg-[rgba(124,93,250,1)] rounded-full disabled:bg-gray-600 disabled:opacity-60 disabled:cursor-not-allowed h-[3rem] transition-all hover:bg-[rgba(146,119,255,1)] text-white text-[0.7rem]"
    >
      {invoiceStatus === "paid" ? "Mark as Pending" : "Mark as Paid"}
    </button>
  );
};

export default StatusToggleButton;
