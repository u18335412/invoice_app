/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const BackButton = () => {
  return (
    <Link href="/" passHref>
      <button className="flex text-[0.7rem] dark:text-white items-center justify-center font-bold gap-x-[1.75rem]">
        <img
          src="/assets/icon-arrow-left.svg"
          className="w-2 h-2"
          alt="arrow left"
        />
        Go back
      </button>
    </Link>
  );
};

export default BackButton;
