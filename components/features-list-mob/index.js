import { Item } from "../corporate-item";
import styles from "./index.module.scss";

const FeaturesListMob = () => {
  return (
    <div className={styles.featuresListMob}>
      <div className={styles.header}>
        <p className={styles.title}>
          Core corporate training programs
        </p>
        <p className={styles.subtitle}>
          Find the best one suits your organisation
        </p>
      </div>
      <div className={styles.content}>
        <Item className={styles.item} />
        <Item className={styles.item} />
        <Item className={styles.item} />
        <Item className={styles.itemTwo} />
        <Item className={styles.itemTwo} />
      </div>
    </div>
  );
};

export default FeaturesListMob;