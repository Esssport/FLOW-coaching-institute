import styles from "./index.module.scss";

const Item = ({
  text = "Happiness in the present"
}) => {
  return (
    <div className={styles.item2}>
      <img
        alt=""
        className={styles.bulletPoint}
        src="https://static.overlay-tech.com/assets/67e14577-f567-4fe4-83c0-1c38ed9d9af5.svg"
      />
      <p className={styles.label}>{text}</p>
    </div>
  );
};

const PillarsSection = (
  {
    title = "Master the 3 pillars of Positive Psychology that over 50.000+ FLOW coaches use today",
  }
) => {
  return (<div className={styles.num3PillarsSection}><div className={styles.textView}><p className={styles.title}>{title}</p><Item className={styles.item} /><Item className={styles.item} /><Item className={styles.item} /></div></div>);
};

export default PillarsSection;