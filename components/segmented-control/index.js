import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
const SegmentedControl = () => {
  
  const Tabs = [
    { id: 1, text: "Infographic" },
    { id: 2, text: "Video" },
    { id: 3, text: "PDF" },
    { id: 4, text: "All" }
  ];
  const [activeId, setActiveId] = useState();

  return (
    <div className={styles.segmentedControl}>
      <div className={styles.frame912}>
        {Tabs.map((val) => (
            <Link href="#">
                <a onClick={() => setActiveId(val.id)} className={activeId === val.id ?  `${styles.selectesState} ${styles.label}`  : styles.label}>{val.text}</a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SegmentedControl;