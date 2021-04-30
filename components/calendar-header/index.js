import styles from "./index.module.scss";

const CalendarHeader = () => {
  return (
    <div className={styles.calendarHeaderWeb}>
      <div className={styles.contentView}>
        <div className={styles.segmentedControlSection}>
          <p className={styles.title}>
            Choose a type of program
          </p>
          <div className={styles.segmentedControl}>
            <div className={styles.toggle}>
              <p className={styles.label}>Certifications</p>
            </div>
            <p className={styles.labelTwo}>
              Continuing Education
            </p>
            <p className={styles.labelThree}>Events</p>
          </div>
        </div>
        <div className={styles.timezoneSection}>
          <div className={styles.infoLabel}>
            <img
              alt=""
              className={styles.iconlyBoldLocation}
              src="https://static.overlay-tech.com/assets/b600105e-00f0-42a1-8457-fb203426d869.svg"
            />
            <p className={styles.labelFour}>
              You are currently viewing the schedule in the
              following time-zone
            </p>
          </div>
          <div className={styles.selector}>
            <p className={styles.timeZoneOptionOne}>
              US/Canada Time(Eastern Time)
            </p>
            <p className={styles.timeZoneOptionTwo}>
              Europe / Middle East Time (London)
            </p>
            <p className={styles.timeZoneOptionTwo}>
              Asia Pacific Time(Hong Kong)
            </p>
            <p className={styles.timeZoneOptionTwo}>
              Australia Time(Sydney)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;