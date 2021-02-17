import React from "react";

import styles from "./style.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.logo}>ReachTheWeb</h1>

        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>About Us</li>
          <li className={styles.item}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
