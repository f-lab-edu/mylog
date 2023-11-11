import styles from "../../styles/Header.module.css";
import Line from "../common/Line";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

export default function Header() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <>
      <header className={styles.header}>
        <button className={styles.header_logo}>MyLog</button>
        <button className={styles.header_search_icon}>
          <SearchOutlined />
        </button>
        <button className={styles.header_menu_icon}>
          <MenuOutlined />
        </button>
      </header>
      <img
        src={process.env.PUBLIC_URL + `/assets/wave.jpg`}
        alt="header-img"
        className={styles.header_img}
      />
      <Line />
    </>
  );
}
