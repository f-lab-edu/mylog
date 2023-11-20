import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { memo } from "react";
import { Database } from "@/lib/supabase/schema";
import DOMPurify from "dompurify";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

const BlogItem = ({ id, title, content, createdDate }: Blog) => {
  const router = useRouter();

  const onClickMoveToDetail = (id: number): void => {
    router.push(`${id}`);
  };

  return (
    <div>
      <article
        className={styles.article}
        onClick={() => onClickMoveToDetail(id)}
      >
        <div>
          <div className={styles.article_title}>{title}</div>
          <span className={styles.article_date}>
            {new Date(createdDate).toLocaleDateString()}
          </span>
          {process.browser && (
            <div
              className={styles.article_content_preview}
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
