import React from "react";

import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h1>RR Info Solution</h1>
          <p className={styles.byline}></p>
        </div>

        <div className={styles.right}>
          <button className={styles.contactus}>Contact Us</button>

          <h3 style={{ fontWeight: "100" }}>sales@rrinfosolution.com</h3>
          <h3 style={{ fontWeight: "100" }}>support@rrinfosolution.com</h3>
        </div>
      </div>

      <div className={styles.copyright}>
        @2021 RR Info Solution, All rights reserved
      </div>
    </div>
  );
}
