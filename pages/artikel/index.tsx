import Head from "next/head";
import React from "react";
import ArticleComponent from "../../components/ArticleComponent";

const index = () => {
  return (
    <>
      <Head>
        {/* <meta name="keywords" content="" />
        <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://www.afloor88.com/artikel" />
      </Head>
      <ArticleComponent />;
    </>
  );
};

export default index;
