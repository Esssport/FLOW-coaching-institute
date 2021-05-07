import styles from "./index.module.scss";

const StatsCard = ({
  count = "2",
  label = "Referrals"
}) => {
  return (
    <div className={styles.statsCard}>
      <p className={styles.count}>{count}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default StatsCard;