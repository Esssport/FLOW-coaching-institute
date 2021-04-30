import styles from "./index.module.scss";


const coachDiscoverModules = ({
  title = "Discover why you should choose an ICF accredited coaching school"
}) => {
  return (
    <div className={styles.discoverSection}>
      <p className={styles.title}>{title}</p>
      <img
        alt=""
        className={styles.icfLogo}
        src="https://static.overlay-tech.com/assets/9d8d28fe-cf0f-4b2f-a2d0-1d4d1dd5eba4.svg"
      />
      <img
        alt=""
        className={styles.icfLogo}
        src="https://static.overlay-tech.com/assets/a5ec942c-fd01-4394-a4c6-35aa03dad3b4.svg"
      />
    </div>
  );
};

export default coachDiscoverModules;