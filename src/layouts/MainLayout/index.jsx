import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

export default function index({ children }) {
  return (
    <>
      <Head>
        <title>ReachTheWeb</title>
        <meta
          name="description"
          content="ReachTheWeb is a development studio which equips creative founders with on-demand design and development team to execute their vision into reality. Our services include Dyamic Web Applications, Cross-platform Mobile Applications, custom made servers and much more."
        />
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
