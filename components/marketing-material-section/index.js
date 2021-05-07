import styles from "./index.module.scss";

const MarketingMaterialSection = () => {
  return (
    <div className={styles.marketingMaterialSection}>
      <div className={styles.contentView}>
        <img
          alt=""
          className={styles.iconlyBoldPlus}
          src="https://static.overlay-tech.com/assets/2a7bc2e6-1da8-4313-aaa4-12598e12bcf6.svg"
        />
        <p className={styles.title}>
          We provide you the marketing materials needed to
          promote courses.
        </p>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default MarketingMaterialSection;