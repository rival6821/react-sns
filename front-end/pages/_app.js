import React from "react";
import Head from "next/head";
import Applayout from "../components/Applayout";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import sagaMiddleware from "../sagas/middleware";
import rootSage from "../sagas";

const Sns = ({ Component, store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

Sns.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSage);
  return store;
})(Sns);
