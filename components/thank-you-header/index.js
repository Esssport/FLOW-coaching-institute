import StickySocialShare from "../sticky-social-share";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        alt=""
        className={styles.imagemask}
        src="https://static.overlay-tech.com/assets/064a7aab-68c7-484a-afae-76045180871c.png"
      />
      <div className={styles.contentView}>
        <div className={styles.content}>
          <p className={styles.title}>Thank you</p>
          <p className={styles.subtitle}>
            We have received your message. We will be in
            touch with you as soon as possible.
          </p>
        </div>
        <StickySocialShare
          className={styles.stickySocialShare}
        />
      </div>
    </div>
  );
};

export default Header;