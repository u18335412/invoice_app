/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <nav className="flex md:flex-row justify-between xl:rounded-tr-[20px] xl:rounded-br-[20px] xl:h-full xl:min-h-screen md:h-[5rem] xl:absolute md:relative xl:flex-col xl:w-[6.438rem] md:w-full overflow-hidden dark:bg-[rgb(37,41,69)]">
      <div className=" xl:flex md:block">
        <div
          className="xl:w-full md:w-[5rem] flex rounded-br-[20px] overflow-hidden xl:h-[6.438rem] md:h-full flex-col-reverse bg-[rgb(124,93,250)] relative justify-center items-center"
          alt="logo icon"
        >
          <div className="w-full bg-[rgb(146,119,255)] h-1/2 rounded-tl-[20px] "></div>
          <div className="w-full h-1/2"></div>
          <img
            src="/assets/Combined Shape.svg"
            className="w-[40px] h-[37.71px] absolute"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex md:flex-row xl:gap-x-0 md:gap-x-[2rem] md:w-[7.313] xl:flex-col justify-center items-center">
        <div className="md:w-full xl:w-fit">
          <img
            src="/assets/icon-sun.svg"
            className="w-[1.199rem] h-[1.199rem]"
            alt="light theme icon"
          />
        </div>
        <div className="bg-[rgb(151,151,151)] md:h-full md:w-[1px] xl:w-full xl:h-[1px] xl:mt-[2.006rem] xl:mb-[1.563rem]"></div>
        <div className=" xl:mb-[1.563rem] bg-rose-30 xl:mr-0 md:mr-[2rem] h-full w-full flex justify-center items-center">
          <img
            src="/assets/image-avatar.jpg"
            className="xl:w-[2.5rem] xl:h-[2.5rem] rounded-full"
            alt="image avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
