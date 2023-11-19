import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { memo } from "react";
import { Database } from "@/lib/supabase/schema";
import DOMPurify from "dompurify";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

const BlogItem = ({ id, title, content, createdDate, writer }: Blog) => {
  const router = useRouter();

  const onClickMoveToDetail = (id: number): void => {
    router.push(`${id}`);
  };

  return (
    <div>
      <article
        className={styles.section_article}
        onClick={() => onClickMoveToDetail(id)}
      >
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
          {process.browser && (
            <div
              className={styles.blog_content_preview}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(content)),
              }}
            />
          )}
        </div>
      </article>
    </div>
  );
};

BlogItem.displayName = "BlogItem";

export default memo(BlogItem);
