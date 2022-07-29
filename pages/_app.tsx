import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aksesoris lantai vinyl, parket, pvc | aFloor</title>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
