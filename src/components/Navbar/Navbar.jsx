import Link from "next/link";
import styles from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.logo}>ReachTheWeb</h1>

        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>
            <Link href="#services">Services</Link>
          </li>
          <li className={styles.item}>About Us</li>
          <li className={styles.item}>
            <Link href="#contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
