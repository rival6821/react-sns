import React from "react";
import Head from "next/head";
import Applayout from "../components/Applayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>후니보드</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <Applayout>
        <div>Hello Next!</div>
      </Applayout>
    </>
  );
};
export default Home;