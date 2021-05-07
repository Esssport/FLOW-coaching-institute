import StatsCard from "../stats-card";
import styles from "./index.module.scss";

const StatsSectionMob = () => {
  return (
    <div className={styles.statsSection}>
      <div className={styles.background} />
      <div className={styles.content}>
        <p className={styles.title}>Your stats</p>
        <div className={styles.cards}>
          <StatsCard className={styles.statsCard} />
          <div className={styles.divider} />
          <StatsCard className={styles.statsCard} />
          <div className={styles.divider} />
          <StatsCard className={styles.statsCard} />
          <div className={styles.divider} />
          <StatsCard className={styles.statsCard} />
        </div>
      </div>
    </div>
  );
};

export default StatsSectionMob;