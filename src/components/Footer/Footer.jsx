import React from "react";

import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h1>ReachTheWeb</h1>
          <p className={styles.byline}>
            Building Dreams And Ideas Into Reality
          </p>
        </div>

        <div className={styles.right}>
          <button className={styles.contactus}>Contact Us</button>

          <div className={styles.icons}>
            <Facebook />
            <Instagram />
            <LinkedIn />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        @2020 ReachTheWeb Solutions LLP, All rights reserved
      </div>
    </div>
  );
}
