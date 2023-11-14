import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { MouseEvent, useRef, useReducer } from "react";
import { memo } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}

interface Action {
  type: string;
  data: { id: number; title: string; content: string; createdDate: number };
}

// const reducer = (state: Blog[], action: Action): Blog[] => {
//   switch (action.type) {
//     case "CREATE": {
//       return [...state, action.data];
//     }
//   }
// };

const BlogItem = ({ id, title, content, createdDate }: Blog) => {
  const router = useRouter();
  // const [blogLists, dispatch] = useReducer(reducer);
  const idRef = useRef(4);

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>): void => {
    // router.push(`${e.target.id}`);
  };

  const onClickMoveToEdit = () => {
    router.push(`/edit`);
  };

  return (
    <div>
      <article className={styles.section_article} onClick={onClickMoveToDetail}>
        <img
          src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
          alt="home_img"
          className={styles.home_img}
        />
        <div>
          <div className={styles.section_article_text}>{title}</div>
          <div className={styles.blog_date}>
            {new Date(createdDate).toLocaleDateString()}
          </div>
          <p>
            <div className={styles.blog_content_preview}>{content}</div>
          </p>
        </div>
      </article>
    </div>
  );
};

BlogItem.displayName = "BlogItem";

export default memo(BlogItem);
