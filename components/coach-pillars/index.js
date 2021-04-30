import styles from "./index.module.scss";

const Item = ({
  text = "Happiness in the present",
  src = "https://static.overlay-tech.com/assets/67e14577-f567-4fe4-83c0-1c38ed9d9af5.svg"
}) => {
  return (
    <div className={styles.item2}>
      <img
        alt=""
        className={styles.bulletPoint}
        src={src}
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
  return (
    <div className={styles.num3PillarsSection}>
      <div className={styles.textView}>
        <p className={styles.title}>{title}</p>
        <Item 
        text="Contentment with the past"
        src="https://static.overlay-tech.com/assets/adf42b41-b6e9-4c06-ac79-8ff933af5c4d.svg"
        className={styles.item} />
        <Item className={styles.item} />
        <Item 
        text="Optimism for the future"
        src="https://static.overlay-tech.com/assets/d01193f0-1354-49ef-848e-3c98f864d1f9.svg"
         className={styles.item} />
      </div>
    </div>
  );
};

export default PillarsSection;