import styles from "./index.module.scss";

const CustomerStats = ({
  hours = "Hours",
  num10 = "10",
  num60 = "60",
  number = "95 % ",
  numberTwo = "122",
  sessions = "Sessions",
  statsTitle = "Success Rate",
  students = "Students"
}) => {
  return (
    <div className={styles.customerStats}>
      <div className={styles.section}>
        <div className={styles.successRate}>
          <p className={styles.number}>{number}</p>
          <p className={styles.statsTitle}>{statsTitle}</p>
        </div>
        <div className={styles.successRate}>
          <p className={styles.numberTwo}>{numberTwo}</p>
          <p className={styles.statsTitle}>{students}</p>
        </div>
        <div className={styles.successRate}>
          <p className={styles.numberTwo}>{num10}</p>
          <p className={styles.statsTitle}>{sessions}</p>
        </div>
        <div className={styles.successRate}>
          <p className={styles.numberTwo}>{num60}</p>
          <p className={styles.statsTitle}>{hours}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;
