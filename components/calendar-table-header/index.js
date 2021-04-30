import styles from "./index.module.scss";

const CalendarTableHeader = () => {
  return (
    <div className={styles.tableViewHeader}>
      <div className={styles.frame713}>
        <p className={styles.classDetailsTitle}>
          Class Details
        </p>
        <div className={styles.frame886}>
          <p className={styles.daysTitle}>Days</p>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/89f99ea1-f443-47ca-bbf0-259469a2fa39.svg"
          />
        </div>
        <div className={styles.frame887}>
          <p className={styles.daysTitle}>Time</p>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/9ecfd0f0-fd34-4544-9209-d0817a31aa79.svg"
          />
        </div>
        <div className={styles.frame888}>
          <p className={styles.seatsTitle}>Seats Left</p>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/e22ea6a9-7229-4ad0-a382-3f422c4ba7ae.svg"
          />
        </div>
        <div className={styles.frame886}>
          <p className={styles.costTitle}>Cost</p>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/692f04d1-51b4-4cf2-819a-bda9e59ff54e.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarTableHeader;