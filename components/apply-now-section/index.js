import styles from "./index.module.scss";
import ButtonCTA from "../button-cta";
import ButtonTransparent from "../button-transparent";

const ApplyNowSection = ({
  description = "Let us know what you think and we will answer all your questions before getting started",
  image = "https://static.overlay-tech.com/assets/03b855f0-b6b3-430d-a198-463e657c0236.png",
  title = "Are you ready to apply now?"
}) => {
  return (
    <div className={styles.applyNowSection}>
      <div className={styles.flexWrapperOne}>
        <div className={styles.investSection}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.buttons}>
             <ButtonCTA
              className={styles.getInTouchBtn}
            />
            <ButtonTransparent
              className={styles.transparentButton}
            />
          </div>
        </div>
      </div>
      <img alt="" className={styles.image} src={image} />
    </div>
  );
};

export default ApplyNowSection;