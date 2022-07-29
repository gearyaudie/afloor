import React, { useState } from "react";
import Head from "next/head";

import HomeComponent from "../components/HomeComponent";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="lem vinyl, lem aksesoris vinyl, aksesoris vinyl, aksesoris lantai vinyl, aksesoris pvc, lantai motif kayu pvc, harga lem vinyl, harga lantai vinyl, lantai vinyl murah, end molding, stepnosing, parket, lis kayu, afloor, efloor"
        />
        <meta
          name="description"
          content="Aksesoris lantai vinyl murah, lem untuk lantai vinyl, PVC, parket. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
