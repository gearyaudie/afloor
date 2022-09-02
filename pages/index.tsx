import React, { useState } from "react";
import Head from "next/head";

import HomeComponent from "../components/HomeComponent";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Lantai vinyl, lem vinyl, lem aksesoris vinyl, aksesoris vinyl, aksesoris lantai vinyl, aksesoris pvc, lantai motif kayu pvc, harga lem vinyl, harga lantai vinyl, lantai vinyl murah, end molding, stepnosing, parket, lis kayu, afloor, efloor"
        />
        <meta
          name="description"
          content="Aksesoris lantai vinyl murah, lem untuk lantai vinyl, PVC, parket. "
        />
        <meta
          property="og:title"
          content="Lantai vinyl, aksesoris lantai vinyl, parket, lem vinyl | afloor"
        />
        <meta
          property="og:description"
          content="Aksesoris lantai vinyl murah, lem untuk lantai vinyl, PVC, parket. "
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/rQg80m2/pexels-maksim-goncharenok-4352247.webp"
        />
        <link rel="canonical" href="https://www.afloor88.com/" />
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
