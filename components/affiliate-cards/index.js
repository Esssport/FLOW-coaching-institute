import Card  from "../affiliate-card";
import styles from "./index.module.scss";

const AffiliateCards = () => {
  return (
    <div className={styles.affiliateCards}>
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
    </div>
  );
};

export default AffiliateCards;
