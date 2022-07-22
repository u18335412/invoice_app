/* eslint-disable @next/next/no-img-element */
import TransitionComponent from "./TransitionComponent";

const NoInvoiceFound = () => {
  return (
    <>
      <TransitionComponent showing={true}>
        <div className="flex justify-center items-center dark:text-[rgba(223,227,250,1)] xl:mt-[8.813rem] mt-[6.375rem] md:mt-[25.313rem]">
          <div className=" w-[15.125rem] text-center">
            <img
              src="/assets/illustration-empty.svg"
              className="xl:w-[15.084rem] xl:h-[12.5rem] md:w-[15.063rem"
              alt="illustration"
            />
            <p className=" font-bold text-[1.25rem] mt-[4rem]">
              There is nothing here
            </p>
            <p className="text-[0.75rem] dark:text-[rgba(223,227,250,1)] tracking-[-0.25px] mt-[1.5rem] text-[rgba(136,142,176,1)]">
              Create an invoice by clicking the
              <span className="font-bold"> New Invoice </span>
              button and get started.
            </p>
          </div>
        </div>
      </TransitionComponent>
    </>
  );
};

export default NoInvoiceFound;
