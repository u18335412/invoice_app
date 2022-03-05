import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const TransitionComponent = ({ showing, children, as }) => {
  return (
    <Transition
      as={as || Fragment}
      appear={true}
      show={showing}
      enter="transform transition duration-[200ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 "
      leaveTo="opacity-0 scale-60"
    >
      {children}
    </Transition>
  );
};

export default TransitionComponent;
