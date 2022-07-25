import "../styles/globals.css";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import useStore from "../src/store/theme";

function MyApp({ Component, pageProps }) {
  const { isDark } = useStore();
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="relative min-h-full bg-[rgba(248,248,251)] h-full dark:bg-[rgba(20,22,37,1)]  dark:text-white">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
