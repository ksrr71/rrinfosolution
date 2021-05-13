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

        <meta property="og:url" content="https://reachtheweb.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ReachTheWeb - Building Your Dreams"
        />
        <meta
          property="og:description"
          content="ReachTheWeb is a development studio which equips creative founders with on-demand design and development team to execute their vision into reality. Our services include Dyamic Web Applications, Cross-platform Mobile Applications, custom made servers and much more."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/himanshu-cloud/image/upload/v1620819809/reachtheweb-social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="reachtheweb.in" />
        <meta property="twitter:url" content="https://reachtheweb.in" />
        <meta
          name="twitter:title"
          content="ReachTheWeb - Building Your Dreams"
        />
        <meta
          name="twitter:description"
          content="ReachTheWeb is a development studio which equips creative founders with on-demand design and development team to execute their vision into reality. Our services include Dyamic Web Applications, Cross-platform Mobile Applications, custom made servers and much more."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/himanshu-cloud/image/upload/v1620819809/reachtheweb-social.png"
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
