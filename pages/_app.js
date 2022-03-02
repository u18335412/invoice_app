import "../styles/globals.css";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      {/* <Footer></Footer> */}
    </>
  );
}

export default MyApp;
