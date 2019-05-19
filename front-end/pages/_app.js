import React from "react";
import Head from "next/head";
import Applayout from "../components/Applayout";
import PropTypes from "prop-types";

const Sns = ({ Component }) => {
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
        <Component />
      </Applayout>
    </>
  );
};

Sns.propTypes = {
  Component: PropTypes.elementType
};

export default Sns;
