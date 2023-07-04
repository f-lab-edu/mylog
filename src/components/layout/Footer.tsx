import React from "react";
import styles from "./Footer.module.css";
import Line from "../Line";

const Footer = () => {
  return (
    <footer>
      <Line />
      <div className={styles.footer_text}>
        <h4>MyLog</h4>
        <p className={styles.footer_p}>서울특별시 중구 세종대로</p>
      </div>
    </footer>
  );
};

export default Footer;
