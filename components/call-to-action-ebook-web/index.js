import PrimaryButton from "../button-primary"
import TransparentButton from "../transparent-button"

import styles from "./index.module.scss";

const CallToActionEbookWeb = ({
  description = "For many years now coaches have been inspiring lives across the globe by using the FLOW Coaching Methodology with their clients. Other than FLOW coaches we have been receiving many requests from other coaches to learn about the FLOW Coaching Methodology. As a result, we have decided to make the FLOW Coaching methodology and principles available to other coaches from around the world.",
  kitapMockup21 = "https://static.overlay-tech.com/assets/81bb5c10-71c9-455c-890e-b56c721bf73b.png",
  label = "Free for course participants",
  subtitle = "The course participants have FREE access to the e-book worth 54.99 CAD$",
  title = "FLOW Coaching Methodology & Principles"
}) => {
  return (
    <div className={styles.upcomingCoursesBookSection}>
      <div className={styles.promotionBanner}>
        <div className={styles.content}>
          <p className={styles.label}>{label}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div className={styles.flexWrapperOne}>
        <img
          alt=""
          className={styles.kitapMockup21}
          src={kitapMockup21}
        />
        <div className={styles.contentView}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>
            {description}
          </p>
          <PrimaryButton className={styles.primaryButton} />
          <TransparentButton
            className={styles.transparentButton}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToActionEbookWeb;