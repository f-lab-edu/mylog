import { memo } from "react";
import styles from "../../styles/Component.module.css";

const Line = () => {
  return <div className={styles.line}></div>;
};

Line.displayName = "Line";
export default memo(Line);
