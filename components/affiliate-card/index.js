import styles from "./index.module.scss";

const Card = ({
  subtitle = "Infographics",
  title = "PDF"
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.flexWrapperOne}>
        <p className={styles.title}>{title}</p>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/32103d8c-1245-48ec-a02c-71dade3dff6a.svg"
        />
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Card;