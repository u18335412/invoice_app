/* eslint-disable @next/next/no-img-element */
import TransitionComponent from "./transition_component";

const NoInvoiceFound = () => {
  return (
    <>
      <TransitionComponent showing={true}>
        <div className="flex justify-center items-center mt-[8.813rem]">
          <div className=" w-[15.125rem] text-center">
            <img
              src="/assets/illustration-empty.svg"
              className="w-[15.084rem] h-[12.5rem]"
              alt="illustration"
            />
            <p className=" font-bold text-[1.25rem] mt-[4rem]">
              There is nothing here
            </p>
            <p className="text-[0.75rem] tracking-[-0.25px] mt-[1.5rem] text-[rgba(136,142,176,1)]">
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
