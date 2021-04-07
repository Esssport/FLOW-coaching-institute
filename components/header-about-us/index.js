import styles from "./index.module.scss";

const HeaderAboutUs = ({
  companyDetails = "Established in Vancouver, BC in 2009 the FLOW Coaching Institute has helped more than &#43;50,000 individuals and Fortune 1000 companies around the world to transform their lives, performance, and cultures forever.",
  image = "https://static.overlay-tech.com/assets/55172b81-e002-46ad-8d85-2f2f6500976b.png",
  introText = "The FLOW Coaching Institute trains world-class coaches through face-to-face and virtual coach training programs accredited by the International Coach Federation.",
  sectionTitle = "Companies choose Flow to train their managers"
}) => {
  return (
    <div className={styles.header}>
      <p className={styles.introText}>{introText}</p>
      <div className={styles.content}>
        <img alt="" className={styles.image} src={image} />
        <p className={styles.companyDetails}>
          {companyDetails}
        </p>
      </div>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
    </div>
  );
};

export default HeaderAboutUs;
