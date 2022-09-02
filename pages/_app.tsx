import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aksesoris lantai vinyl, parket, pvc | aFloor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:site_name" content="afloor88.com" />
        <meta property="og:publisher" content="https://www.afloor.com" />
        <meta
          name="google-site-verification"
          content="C6ukRtS-Ybo6PcbAdIumTlHrvKxlq9GK1uyOXDpyGPA"
        />
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/CJxjrK7/afloor-icon.png"
        />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
