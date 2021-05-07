import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Affiliate Program</p>
      <p className={styles.subtitle}>
        Invite others to become a coach and earn your own
        part.
      </p>
    </div>
  );
};

export default Header;