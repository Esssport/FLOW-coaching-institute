import styles from "./index.module.scss";
import CustomSlider from "../custom-slider"
import Tile from "../tile"

const SectionTestimonials = () => {
  return (
    <>
      <h1 className={styles.headline}>“Inspiring lives. One person at a time”</h1>
      <div className={styles.numberDescription}>
        <div className={styles.number}><span className={styles.numberSection}>125</span><span className={styles.textSection}><br />hours</span></div>
        <p className={styles.description}>Completion of the program gives you <strong>125 coach specific training hours,</strong> completion of mandatory mentoring hours  and a performance evaluation process included.</p>
      </div>
      <CustomSlider tileType="custom-tile">
        <Tile />
      </CustomSlider>
    </>
  )
};

export default SectionTestimonials;