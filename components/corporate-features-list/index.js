import Item from "../corporate-features-list";
import styles from "./index.module.scss";

const FeaturesListCorporate = () => {
  return (
    <div className={styles.featuresListCorporate}>
      <div className={styles.header}>
        <p className={styles.title}>
          Core corporate training programs
        </p>
        <p className={styles.subtitle}>
          Find the best one suits your organisation
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.row1}>
          <Item className={styles.item} />
          <Item className={styles.item} />
          <Item className={styles.item} />
        </div>
        <div className={styles.row1}>
          <Item className={styles.item} />
          <Item className={styles.item} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesListCorporate;