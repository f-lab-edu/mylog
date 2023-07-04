import React from "react";
import styles from "./Header.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import Line from "../Line";

const Header = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <>
      <header>
        <button className={styles.header_logo}>MyLog</button>
        <button className={styles.header_search_icon}>
          <SearchIcon />
        </button>
        <button className={styles.header_menu_icon}>
          <MenuRoundedIcon />
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
};

export default Header;
