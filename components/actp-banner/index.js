import styles from "./index.module.scss";

const ACTPBanner = ({
  actpBannerText = "The ACTP track offers beginning to end ICF Professional Coach certification training all the way up to ACC &amp; PCC. ",
  iconlyBoldMedal = "https://static.overlay-tech.com/assets/f9256451-b1de-4531-b150-3af3d964f9ba.svg"
}) => {
  return (
    <div className={styles.actpBanner}>
      <div className={styles.content}>
        <img
          alt=""
          className={styles.iconlyBoldMedal}
          src={iconlyBoldMedal}
        />
        <p className={styles.actpBannerText}>
          {actpBannerText}
        </p>
      </div>
    </div>
  );
};

export default ACTPBanner;
