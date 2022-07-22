const TableHeader = ({ style }) => {
  return (
    <>
      <thead className="absolute invisible md:relative md:visible">
        <tr className="">
          <th className="text-left ">
            <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
              Item name
            </span>
          </th>
          <th className="text-center ">
            <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
              QTY.
            </span>
          </th>
          <th className="text-right ">
            <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
              Price
            </span>
          </th>
          <th className="text-right ">
            <span className="text-[rgba(126,136,195,1)]  dark:text-[rgba(223,227,250,1)]  font-normal text-[.75rem]">
              Total
            </span>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
