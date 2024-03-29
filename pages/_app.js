import "../styles/globals.css";
import Navbar from "../src/components/navbar";
import useStore from "../src/store/theme";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);
  const { isDark } = useStore();

  useEffect(() => {
    setTheme(isDark);
  }, [isDark]);

  return (
    <div className={`${theme ? "dark" : ""}`}>
      <div className="relative min-h-full bg-[rgba(248,248,251)] h-full dark:bg-[rgba(20,22,37,1)]  dark:text-white">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
