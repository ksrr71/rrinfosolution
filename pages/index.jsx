import MainLayout from "../src/layouts/MainLayout";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "20rem",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>Website Under Construction !</h1>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            Our site is under construction right now. Please visit us at
            support@rrinfosolution.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
