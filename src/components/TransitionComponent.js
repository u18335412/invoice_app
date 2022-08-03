import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const TransitionComponent = ({
  showing,
  children,
  as,
  enter = "transform transition duration-[200ms]",
  enterFrom = "opacity-0",
  enterTo = "opacity-100",
  leave = "transform duration-200 transition ease-in-out",
  leaveFrom = "opacity-100 scale-100",
  leaveTo = "opacity-0 scale-90",
}) => {
  return (
    <Transition
      as={as || Fragment}
      appear={true}
      show={showing}
      enter={enter}
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
      afterLeave={() => {}}
    >
      {children}
    </Transition>
  );
};

export default TransitionComponent;
