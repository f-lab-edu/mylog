import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "../styles/Write.module.css";
import Line from "@/components/common/Line";
import { memo } from "react";
import { supabase } from "@/lib/supabase/initSupabase";
import dayjs from "dayjs";
import { modules } from "@/components/common/EditorModules";
import { Database } from "@/lib/supabase/schema";
import { UnprivilegedEditor } from "react-quill";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

interface WriteProps {
  isEdit: boolean;
}

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const Write = (props: WriteProps) => {
  const router = useRouter();

  const addNewPost = async (data: Blog) => {
    const { title, content, writer, createdDate } = data;

    try {
      const { data, error } = await supabase
        .from("blog")
        .insert([{ title, content, writer, createdDate }])
        .select();

      if (error) {
        throw error;
      } else {
        const newPostId: number = data[0].id;
        if (newPostId) {
          router.push(`${newPostId}`);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("새 글 작성 오류 발생 >> ", error.message);
        return;
      }
    }
  };

  const { register, setValue, trigger, handleSubmit } = useForm<Blog>({
    mode: "onChange",
  });

  const onChangeContent = (editor: UnprivilegedEditor) => {
    const content = editor.getContents();
    console.log(JSON.stringify(content));
    setValue("content", JSON.stringify(content));
    trigger("content");
  };

  const onClickSubmit = (data: Blog) => {
    if (!data.title && !data.content) {
      alert("제목, 내용은 필수 입력 사항입니다.");
      return;
    }
    data.createdDate = dayjs().format("YYYY.MM.DD HH:mm:ss");
    data.writer = "작성자";

    addNewPost(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div className={styles.write_button_wrapper}>
        <div className={styles.write_button_wrapper_right}>
          <button>임시저장</button>
          <button className={styles.button_submit}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </button>
        </div>
      </div>
      <Line />
      <input
        type="text"
        placeholder="제목을 입력하세요."
        className={styles.write_title}
        {...register("title")}
      />
      <br />
      <ReactQuill
        onChange={(content, delta, source, editor) => onChangeContent(editor)}
        placeholder="내용을 입력하세요."
        className={styles.write_content_reactQuill}
        modules={modules}
      />
    </form>
  );
};

Write.displayName = "Write";
export default memo(Write);
