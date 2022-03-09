/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import TransitionComponent from "./transition_component";

const Navbar = ({ isDark, setIsDark }) => {
  const router = useRouter();
  return (
    <nav className="flex md:flex-row justify-between xl:rounded-tr-[20px] xl:rounded-br-[20px] xl:h-full xl:min-h-screen h-[4.5rem] md:h-[5rem] z-50 xl:absolute md:relative xl:flex-col inset-0 xl:w-[6.438rem] w-full overflow-hidden bg-[rgb(37,41,69)]">
      <div
        className="cursor-pointer xl:flex bg-lime-300s md:block"
        onClick={() => router.push("/")}
      >
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
      <div className="flex xl:w-full w-fit  flex-row xl:gap-x-0 gap-x-[1.25rem] md:gap-x-[2rem] xl:flex-col justify-center items-center">
        <div className="relative md:w-full xl:w-fit">
          <input
            onClick={() => setIsDark(!isDark)}
            defaultValue={isDark}
            type="checkbox"
            className="w-[1.199rem] cursor-pointer appearance-none h-[1.199rem] peer"
            name="theme-toggle"
            id="theme-toggle"
          />

          {isDark && (
            <TransitionComponent showing={true}>
              <img
                src="/assets/icon-sun.svg"
                className="w-[1.199rem] absolute pointer-events-none inset-0 h-[1.199rem]"
                alt="light theme icon"
              />
            </TransitionComponent>
          )}

          {!isDark && (
            <TransitionComponent showing={true}>
              <img
                src="/assets/icon-moon.svg"
                className="w-[1.199rem] absolute pointer-events-none inset-0 h-[1.199rem]"
                alt="dark theme icon"
              />
            </TransitionComponent>
          )}
        </div>
        <div className="bg-[rgba(73,78,110,1)] h-full w-[1px] xl:w-full xl:h-[1px] xl:mt-[2.006rem] xl:mb-[1.563rem]"></div>
        <img
          src="/assets/image-avatar.jpg"
          className="w-[2rem] h-[2rem] mr-[1.5rem] md:mr-[2rem] xl:mr-0 xl:mb-[1.563rem]  xl:w-[2.5rem] xl:h-[2.5rem] rounded-full"
          alt="image avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
