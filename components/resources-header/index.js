import styles from "./index.module.scss";
import SegmentedControl from "../segmented-control"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.textView}>
        <p className={styles.title}>Resources</p>
        <p className={styles.subtitle}>
          Find the best resources and videos that will help
          you further your coaching journey
        </p>
      </div>
      <SegmentedControl/>
    </div>
  );
};

export default Header;
