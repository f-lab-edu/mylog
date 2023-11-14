import styles from "../../styles/Footer.module.css";
import Line from "../common/Line";
import { memo } from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Line />
      <div>
        <h4>MyLog</h4>
        <p className={styles.footer_p}>서울특별시 중구 세종대로</p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default memo(Footer);
