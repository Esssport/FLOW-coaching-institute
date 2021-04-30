import styles from "./index.module.scss";
import React from "react";

const FooterCTA = () => {
  return (
    <div className={styles.footerCta}>
      <div className={styles.background} />
      <img
        alt=""
        className={styles.vectaryTexture}
        src="https://static.overlay-tech.com/assets/f1962290-3114-4c3f-8a73-83bc2b1ffeff.png"
      />
      <div className={styles.section}>
        <div className={styles.contentView}>
          <p className={styles.title}>
            Get access to our methodology and principles
            just for 54.99 CAD$
          </p>
          <button className={styles.secondaryButton}>
            <p className={styles.btnLabel}>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;