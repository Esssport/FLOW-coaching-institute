import styles from "./index.module.scss";
// import { SecondaryButton } from "components";

const FooterCTA = ({
  title = "Get access to our methodology and principles just for 54.99 CAD$",
  vectaryTexture = "https://static.overlay-tech.com/assets/f1962290-3114-4c3f-8a73-83bc2b1ffeff.png"
}) => {
  return (
    <div className={styles.footerCta}>
      <div className={styles.background} />
      <img
        alt=""
        className={styles.vectaryTexture}
        src={vectaryTexture}
      />
      <div className={styles.section}>
        <div className={styles.contentView}>
          <p className={styles.title}>{title}</p>
          <SecondaryButton
            className={styles.secondaryButton}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;