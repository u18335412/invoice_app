const InputField = ({
  container = "",
  label,
  placeholder,
  inputStyle,
  type,
  input,
  value,
  register,
  errors,
  text,
}) => (
  <div className={`flex flex-col gap-y-[0.625rem] mt-[1.5rem] ${container}`}>
    <label
      htmlFor={label}
      className={`flex dark:text-[rgba(223,227,250,1)] justify-between items-center text-[.75rem] ${
        errors[`${text}`]
          ? "text-[rgba(236,87,87,1)] dark:text-[rgba(236,87,87,1)]"
          : "text-[rgba(126,136,195,1)]"
      } `}
    >
      {label}
      <span
        className={`text-[0.625rem] font-semibold ${
          errors[`${text}`] ? "" : "hidden"
        }`}
      >
        {"can't be empty"}
      </span>
    </label>
    {input ? (
      <>{input}</>
    ) : (
      <>
        <input
          {...register(text, { required: true })}
          placeholder={placeholder}
          defaultValue={value}
          type={type}
          name={text}
          className={`${inputStyle} h-[3rem] text-[.7rem] font-bold rounded-[.25rem] border-[1px] dark:border-[rgb(37,41,69)] border-[rgba(223,227,250,1)] outline-none focus:border-opacity-100 dark:bg-[rgba(30,33,57,1)] dark:text-white focus:border-[rgba(124,93,250,1)] px-[1.25rem] ${
            errors[`${text}`] &&
            "border-[rgba(236,87,87,1)] dark:border-[rgba(236,87,87,1)]"
          }  `}
        />
      </>
    )}
  </div>
);

export default InputField;
