import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

export default function index({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
