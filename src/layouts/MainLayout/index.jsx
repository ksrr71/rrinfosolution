import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

export default function index({ children }) {
  return (
    <>
      <Head>
        <title>RR Info Solution</title>

        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
