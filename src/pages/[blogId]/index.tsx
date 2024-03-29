import { useEffect, useState } from "react";
import styles from "../../styles/View.module.css";
import Line from "../../components/common/Line";
import { memo } from "react";
import { useRouter } from "next/router";
import { Database } from "@/lib/supabase/schema";
import { supabase } from "@/lib/supabase/initSupabase";
import dayjs from "dayjs";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import DOMPurify from "dompurify";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

const View = () => {
  const router = useRouter();
  const blogId = Number(router.query.blogId);
  const [blog, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchBlog = async () => {
      try {
        const { data: blog, error } = await supabase
          .from("blog")
          .select("*")
          .eq("id", blogId);

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        const deltaOps = JSON.parse(blog[0].content).ops;
        const deltaToHtmlConverter = new QuillDeltaToHtmlConverter(
          deltaOps,
          {}
        );
        const html = deltaToHtmlConverter.convert();

        setBlog(blog.map((post) => ({ ...post, content: html })));
      } catch (error) {
        if (error instanceof Error) {
          console.log("view페이지 에러 >> ", error.message);
        }
      }
    };
    fetchBlog();
    return () => {
      isMounted = false;
    };
  }, [blogId]);

  const onClickMoveToEdit = (): void => {
    router.push(`${blogId}/edit`);
  };

  const onClickDeletePost = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        await supabase.from("blog").delete().eq("id", blogId).throwOnError();
        setBlog(blog.filter((post) => post.id !== blogId));
      } catch (error) {
        if (error instanceof Error) {
          console.log("게시물 삭제 중 에러 >> ", error.message);
        }
      }
      alert("해당 게시물이 삭제되었습니다.");
      router.push("/");
    } else {
      return;
    }
  };

  return (
    <>
      {blog.map((post) => (
        <div key={post.id}>
          <div className={styles.view_head}>
            <h1>{post.title}</h1>
            <div className={styles.view_head_detail}>
              <div className={styles.view_head_detail_left}>
                <span className={styles.view_head_detail_left_writer}>
                  {post.writer}
                </span>
                <span>
                  {dayjs(post.createdDate).format("YYYY.MM.DD HH:mm:ss")}
                </span>
              </div>
              <div className={styles.view_head_detail_right}>
                <button
                  onClick={() => onClickMoveToEdit()}
                  className={styles.view_head_detail_right_editBtn}
                >
                  수정하기
                </button>
                <button onClick={() => onClickDeletePost()}>삭제하기</button>
              </div>
            </div>
            <Line />
          </div>
          <div className={styles.view_main_content}>
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(post.content)),
                }}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

View.displayName = "View";
export default memo(View);
