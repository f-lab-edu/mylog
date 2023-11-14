import { useRouter } from "next/router";
import styles from "../../styles/Header.module.css";
import Line from "../common/Line";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { memo } from "react";
import Button from "@/components/common/Button";

const Header = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  const onClickMoveToNew = () => {
    router.push("new");
  };
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <>
      <header className={styles.header}>
        <button className={styles.header_logo} onClick={onClickLogo}>
          MyLog
        </button>
        <div className={styles.header_menu_wrapper}>
          <Button text={"새 글 작성"} onClick={onClickMoveToNew} />
          <button className={styles.header_search_icon}>
            <SearchOutlined />
          </button>
          <button className={styles.header_menu_icon}>
            <MenuOutlined />
          </button>
        </div>
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

Header.displayName = "Header";

export default memo(Header);
