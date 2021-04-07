import styles from "./index.module.scss";

const AccreditedSection = () => {
  return (
    <div className={styles.accreditedSection}>
      <p className={styles.accreditedSectionTitle}>
        Accredited by
      </p>
      <img
        alt=""
        className={styles.icfHorizontalFullColorHorizontalFull}
        src="https://static.overlay-tech.com/assets/af226ac2-f50c-4f63-9173-f175d43210a3.png"
      />
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/098080c3-0742-4abd-8a32-64310fcb4e14.png"
        className={styles.actpLogoColorOnTransparent1}
      />
      <img
        alt=""
        className={styles.acsthLogo1}
        src="https://static.overlay-tech.com/assets/788b6edd-23a2-4c65-9f99-47896d21eaef.png"
      />
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/0dc250e2-1b30-4cc7-9a8c-2011a871a655.png"
        className={styles.icfCceLogoTransparentBg350x1911}
      />
    </div>
  );
};

export default AccreditedSection;