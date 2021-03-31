import styles from "./index.module.scss";
// import { Logos } from "components";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contentViewTwo}>
        <div className={styles.contentView}>
          <div className={styles.columnOne}>
            <p className={styles.companyLabel}>
              Flow Coaching Institute
            </p>
            <p className={styles.addressLabel}>
              Established in Vancouver, BC in 2009 the FLOW
              Coaching Institute has helped more than
              &#43;50,000 individuals and Fortune 1000
              companies around the world to transform their
              lives, performance, and cultures forever.
            </p>
          </div>
          <div className={styles.columnOne}>
            <p className={styles.columnTwoHeader}>
              Online Coaching Certifications
            </p>
            <p className={styles.link}>ICF Coaching</p>
            <p className={styles.linkTwo}>
              Core Foundations
            </p>
            <p className={styles.linkThree}>
              Advanced ACTP
            </p>
            <p className={styles.linkFour}>
              Business Coaching
            </p>
            <p className={styles.linkFive}>
              Bring FLOW into Your Business
            </p>
            <p className={styles.linkFive}>Our Pricing</p>
          </div>
          <div className={styles.columnOne}>
            <p className={styles.columnThreeHeader}>
              Resources
            </p>
            <p className={styles.linkSix}>Blog</p>
            <p className={styles.linkSeven}>Resources</p>
            <p className={styles.linkSeven}>
              Affiliate Program
            </p>
          </div>
          <div className={styles.columnFour}>
            <p className={styles.columnFourHeader}>
              Contact Us
            </p>
            <p className={styles.textLabel}>
              First Canadian Place - 100 King Street West,
              Suite 5700 - Toronto, ON M5X1C7
            </p>
            <p
              className={
                styles.eMailInfoflowcoachinginstituteComP
              }
            >
              <strong
                className={
                  styles.eMailInfoflowcoachinginstituteComPEmphasis0
                }
              >
                E-mail:
              </strong>{" "}
              info&#64;flowcoachinginstitute.com
              <br />
              <strong
                className={
                  styles.eMailInfoflowcoachinginstituteComPEmphasis0
                }
              >
                Phone:
              </strong>{" "}
              &#43;1 (416) 915-4144
              <br />
              <strong
                className={
                  styles.eMailInfoflowcoachinginstituteComPEmphasis0
                }
              >
                Toll Free No:{" "}
              </strong>
              &#43;1-888-403-0707 <br />
              (only for US &amp; Canada)
              <br />
            </p>
          </div>
        </div>
        <img
          alt=""
          className={styles.divider}
          src="https://static.overlay-tech.com/assets/52a3c685-a788-4957-8013-b4195b68d093.svg"
        />
        <div className={styles.bottomBar}>
          <div className={styles.copyrightSection}>
            <p className={styles.text}>
              Copyright ©2017 inFlow™ All Rights Reserved
            </p>
            <p className={styles.linkEight}>
              Terms of Service
            </p>
          </div>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/97fc0c20-bbe4-44f1-b1da-a8f6d4c777fc.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
