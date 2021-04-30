import styles from "./index.module.scss";

const Select = ({
    inputText = "Select one",
    labelTwo = "How can we help you?"
  }) => {
    return (
      <div className={styles.input}>
        <div className={styles.base}>
          <p className={styles.label}>{labelTwo}</p>
          <div className={styles.formField}>
            <p className={styles.inputText}>{inputText}</p>
            <div className={styles.iconChevronDown}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/0663e6dd-dae0-4a96-b498-ae000871b665.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Select;