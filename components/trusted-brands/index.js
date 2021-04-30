import styles from "./index.module.scss";

// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f


// import { LearnmoreBtn1 } from "components";

const TrustedBrands = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>TRUSTED BY BRANDS</h1>
        <img src="/third-party/companies_section.svg" alt="trusted-companies" className={`${styles.img} trusted-companies`}></img>
      </div>
    </>
  );
};

export default TrustedBrands;
