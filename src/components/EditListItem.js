/* eslint-disable @next/next/no-img-element */
const EditListItem = ({
  itemName,
  qty,
  price,
  total,
  register,
  errors,
  value,
  removeItem,
  idx,
}) => {
  return (
    <div className="flex text-[0.7rem] flex-wrap gap-x-4 md:flex-grow-0 justify-between items-center gap-y-[1.5rem] text-[rgba(136,142,176,1)] ">
      <span className="flex flex-col gap-y-[0.65rem] w-full md:w-[13.375rem]">
        <p className="md:hidden">Item Name</p>
        <input
          {...register(`${itemName}.name`, { required: true })}
          type="text"
          defaultValue={value}
          name={`${itemName}.name`}
          className={`h-[3rem] px-[1.2rem] dark:bg-[rgba(30,33,57,1)] focus:border-[rgba(124,93,250,1)] dark:text-white dark:border-[rgba(37,41,69,1)] text-[.75rem] font-bold  w-full md:w-[13.375rem] border-[1px] ${
            errors[`${itemName}.name`]
              ? "border-[rgba(236,87,87,1)]"
              : "border-[rgba(223,227,250,1)]"
          }  rounded-[.25rem]`}
        />
      </span>

      <span className="flex flex-col gap-y-[0.65rem] w-[4rem]  md:w-[2.875rem]">
        <p className="md:hidden">Qty</p>
        <input
          {...register(`${itemName}.quantity`, { required: true })}
          defaultValue={qty}
          type="number"
          name={`${itemName}.quantity`}
          className={`h-[3rem] focus:border-[rgba(124,93,250,1)] dark:text-white dark:bg-[rgba(30,33,57,1)] text-[.75rem] dark:border-[rgba(37,41,69,1)] px-1 font-bold rounded-[.25rem] border-[1px] ${
            errors[`${itemName}.quantity`]
              ? "border-[rgba(236,87,87,1)]"
              : "border-[rgba(223,227,250,1)]"
          } text-center w-[4rem] md:w-[2.875rem]`}
        />
      </span>

      <span className="flex flex-col gap-y-[0.65rem] w-[6.25rem]">
        <p className="md:hidden">Price</p>
        <input
          {...register(`${itemName}.price`, { required: true })}
          placeholder="0.0"
          defaultValue={price}
          type="number"
          name={`${itemName}.price`}
          className={`h-[3rem] text-[.75rem] dark:text-white dark:bg-[rgba(30,33,57,1)] focus:border-[rgba(124,93,250,1)] font-bold dark:border-[rgba(37,41,69,1)]  rounded-[.25rem] border-[1px] ${
            errors[`${itemName}.price`]
              ? "border-[rgba(236,87,87,1)]"
              : "border-[rgba(223,227,250,1)]"
          } px-[1.2rem] w-[6.25rem]`}
        />
      </span>

      <span className="flex gap-y-[0.65rem]  md:w-[3rem] flex-col w-[30%]">
        <p className="md:hidden">Total</p>
        <input
          {...register(`${itemName}.total`, { required: true })}
          placeholder="0.0"
          type="number"
          defaultValue={total}
          name={`${itemName}.total`}
          className={`h-[3rem] dark:border-[rgba(37,41,69,1)] dark:text-white  focus:border-[rgba(124,93,250,1)] bg-transparent text-[.75rem] rounded-[.25rem] font-bold  md:w-[3rem] ${
            errors[`${itemName}.total`]
              ? "border-[rgba(236,87,87,1)]"
              : "border-[rgba(223,227,250,1)]"
          } text-[rgba(119,127,152,1)] px-[.2rem]`}
        />
      </span>

      <span className="pt-4 md:pt-0">
        <img
          onClick={() => {
            removeItem(idx);
          }}
          src="/assets/icon-delete.svg"
          className="w-[.75rem] h-[1rem]"
          alt="trash icon"
        />
      </span>
    </div>
  );
};

export default EditListItem;
