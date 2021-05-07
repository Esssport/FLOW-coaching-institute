import StepCard from '../3-steps-section-card-1';
import styles from './index.module.scss';

const StepsSection = (
) => {
  return (<div className={styles.num3StepsSection}><p className={styles.title}>In 3 simple steps;</p><div className={styles.contentView}><StepCard className={styles.stepCard}/><img alt="" className={styles.iconlyBoldArrowRight} src="https://static.overlay-tech.com/assets/615862ea-9f42-4e2c-bfd9-f1f8e1fa9407.svg"/><StepCard className={styles.stepCard}/><img alt="" className={styles.iconlyBoldArrowRight} src="https://static.overlay-tech.com/assets/7f1f0ba0-23a9-4d6e-8645-a54f6d56ee6d.svg"/><StepCard className={styles.stepCard}/></div></div>);
};

export default StepsSection;