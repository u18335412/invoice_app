import "../styles/globals.css";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import useStore from "../src/store/zuestand";

function MyApp({ Component, pageProps }) {
  const { isDark, toggleTheme } = useStore();

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="relative dark:bg-[rgba(20,22,37,1)] dark:text-white">
        <Navbar isDark={isDark} setIsDark={toggleTheme}></Navbar>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
