import Button from "../common/Button";
import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface State {
  id: number;
  title: string;
  content: string;
  date: number;
}

export default function BlogItem({ id, title, content, date }: State) {
  const router = useRouter();

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>): void => {
    router.push(`${e.target.id}`);
  };

  const onClickMoveToEdit = () => {
    router.push(`/edit`);
  };

  return (
    <div className="BlogItem">
      <h1>나와?</h1>
      <article className={styles.section_article}>
        <img
          src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
          alt="home_img"
          className={styles.home_img}
        />
        <div onClick={onClickMoveToDetail} className="info_wrapper">
          {/* <div className="blog_date">{date}</div> */}
          <h3>
            <div className={styles.section_article_text}>{title}</div>
          </h3>
          <p>
            <div className="blog_content_preview">{content.slice(0, 25)}</div>
          </p>
        </div>
        <div className="btn_wrapper">
          <Button onClick={onClickMoveToEdit} text={"수정하기"} />
        </div>
      </article>
    </div>
  );
}
