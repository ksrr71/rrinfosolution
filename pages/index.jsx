import Fade from "react-reveal/Fade";

import MainLayout from "../src/layouts/MainLayout";

import styles from "../styles/Home.module.scss";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.link} alt="icons" className={styles.cardIcon} />
      <h1 className={styles.cardTitle}>{item.title}</h1>
      <p className={styles.cardDesc}>{item.desc}</p>
    </div>
  );
};

const ServiceCard = ({ item }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={item.link} alt="icons" className={styles.serviceCardIcon} />
      <h1 className={styles.serviceCardTitle}>{item.title}</h1>
      <p className={styles.serviceCardDesc}>{item.desc}</p>
      <button className={styles.contactNow}>Contact Now &nbsp; ></button>
    </div>
  );
};

export default function Home({ posts }) {
  const cardDetail = [
    {
      title: "Faster",
      desc:
        "We give you guaranteed 12-hour turnarounds so that you can push ideas faster",
      link: "/icons/fast.png",
    },
    {
      title: "Cheaper",
      desc:
        "Our charges are reasonable and we don't charge any hidden overhead expenses",
      link: "/icons/cheap.png",
    },
    {
      title: "Easier",
      desc:
        "We need only a little of your time to understand your requirements and start working.",
      link: "/icons/easy.png",
    },
  ];

  const serviceCardDetail = [
    {
      title: "Websites",
      desc:
        "Build Dynamic and Featureful websites that are eye-catching and user friendly.",
      link: "/images/website.svg",
    },
    {
      title: "Mobile Apps",
      desc: "Amazing Mobile Applications that works on both Android and IOS.",
      link: "/images/mobile.svg",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.row}>
          <img src="/images/home.svg" alt="" className={styles.mainImg} />

          <div className={styles.right}>
            <Fade right>
              <h1 className={styles.title}>Give Wings to your Business</h1>

              <p className={styles.desc}>
                Go Online and reach more customers. We are here to help your
                business grow.
              </p>

              <button className={styles.seeMore}>Connect With Us</button>
            </Fade>
            <div className={styles.circle1} />
          </div>
        </div>

        <div className={styles.commitmentDiv}>
          <h1 className={styles.divTitle}>We are your best partner</h1>
          <p className={styles.divDesc}>
            We believe in delivering an exceptional experience which caters to
            your business, growth and success
          </p>

          <Fade bottom>
            <div className={styles.cardCont}>
              {cardDetail.map((item, key) => (
                <Card item={item} key={key} />
              ))}
            </div>
          </Fade>

          <div className={styles.rect1} />
        </div>

        <div className={styles.commitmentDiv}>
          <h1 className={styles.divTitle}>Our Services</h1>
          <p className={styles.divDesc}>
            Our experienced developers use the latest technologies to make
            powerful and elegant applications for your business.
          </p>

          <Fade bottom>
            <div className={styles.cardCont}>
              {serviceCardDetail.map((item, key) => (
                <ServiceCard item={item} key={key} />
              ))}
            </div>
          </Fade>

          <div className={styles.circle2} />
          <div className={styles.smallRect1} />
          <div className={styles.smallRect2} />
          <div className={styles.smallRect3} />
        </div>

        <Fade bottom>
          <div className={styles.contactUs}>
            <h1 className={styles.contactTitle}>Connect With Us</h1>
            <p className={styles.divDesc}>
              We are just a call away. Get connected with us and expand your
              network. Your right customer are waiting, you just have to show
              them your power.
            </p>
            <button className={styles.contactButton}>
              Talk to us &nbsp; >
            </button>
          </div>
        </Fade>
      </div>
    </MainLayout>
  );
}
