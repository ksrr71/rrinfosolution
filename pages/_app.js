import App from "next/app";

import "../styles/globals.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps}></Component>;
  }
}

export default MyApp;
