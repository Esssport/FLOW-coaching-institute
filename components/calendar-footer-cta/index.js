import styles from "./index.module.scss";
// import { SecondaryButton } from "components";

const SecondaryButton = () => {
  return (
    <div className={styles.secondaryButton}>
      <p className={styles.btnLabel}>Send</p>
    </div>
  );
};


const CalendarFooterCTA = ({
  placeholder = "Enter your email",
  postboxImage = "https://static.overlay-tech.com/assets/a664f1da-db2d-4cea-869d-b47365ff3f7e.png",
  title = "Get access to our certified Flow Coach Method overview."
}) => {
  return (
    <div>
      <div className={styles.background} />
      <div className={styles.section}>
        <img
          alt=""
          className={styles.postboxImage}
          src={postboxImage}
        />
        <div className={styles.contentView}>
          <p className={styles.title}>{title}</p>
          <div className={styles.form}>
            <div className={styles.emailAddressField}>
              <p className={styles.placeholder}>
                {placeholder}
              </p>
            </div>
            <SecondaryButton
              className={styles.secondaryButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFooterCTA;