
import React, {useState} from "react";
import styles from "./index.module.scss"

const removeElement = (el) => {
    document.querySelector('.cta-banner-container')?.remove()
}

const TransparentButton = ({onClick}) => {
    return (
        <button onClick={onClick}>
            <p className={styles.btnLabel1}>Close</p>
        </button>
    );
};

const SecondaryButton = () => {
    return (
        <button className={styles.secondaryButton}>
            <p className={styles.btnLabel3}>Go to course page</p>
        </button>
    );
};

const SecondTransparentButton = () => {
    return (
        <button className={styles.transparentButton2}>
            <p className={styles.btnLabel2}>
                Click here to let us know
            </p>
        </button>
    );
};

const CalendarDetails = (props) => {
    const {isHidden, closeOnClick, partOne, partTwo} = props
    return (
        <div className={isHidden ? styles.hidden : styles.tableRowDetails}>
            <div className={styles.relativeWrapperOne}>
                <div className={styles.closeBtn}>
                    <p className={styles.sectionTitle}>Details</p>
                    <TransparentButton
                    onClick={closeOnClick}
                    />
                </div>
                <div className={styles.contentView}>
                    <div className={styles.columnOne}>
                        <div className={styles.textSection}>
                            <p className={styles.partOne}>
                                {partOne}
                            </p>
                            <p className={styles.partTwo}>
                                {partTwo}
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnTwo}>
                        <div className={styles.header}>
                            <div className={styles.iconlyBoldCalling}>
                                <img
                                    alt=""
                                    src="https://static.overlay-tech.com/assets/194f34bd-d96e-41f0-a81d-f2ad86c43595.svg"
                                />
                                <p className={styles.title}>
                                    You can call us
                                </p>
                            </div>
                        </div>
                        <p className={styles.phoneLabel}>
                            <strong
                                className={styles.phoneLabelEmphasis0}
                            >
                                Phone:{" "}
                            </strong>
              &#43;1 416 915 4144
            </p>
                        <p className={styles.phoneLabel}>
                            <strong
                                className={styles.phoneLabelEmphasis0}
                            >
                                Toll Free:
              </strong>{" "}
              &#43;1-888-403-0707
            </p>
                    </div>
                </div>
                <SecondaryButton
                    className={styles.secondaryButton}
                />
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.contentViewTwo}>
                    <p className={styles.label}>
                        Do you have any questions?
          </p>
                    <SecondTransparentButton
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendarDetails;