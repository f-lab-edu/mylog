import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "../../styles/New.module.css";
import Line from "@/components/common/Line";

interface IFormValues {
  title: string;
  contents: string;
  createdDate: number;
}

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const New = () => {
  const router = useRouter();
  const { register, setValue, trigger, handleSubmit } = useForm<IFormValues>({
    mode: "onChange",
  });
  const onChangeContent = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };
  // const onClickBack = () => {
  //   router.push("/");
  // };

  const onClickSubmit = (data: IFormValues) => {
    if (!data.title && !data.contents) {
      alert("제목, 내용은 필수 입력 사항입니다.");
      return;
    }

    try {
      router.push(``);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div className={styles.button_wrapper}>
        {/* <button onClick={onClickBack}>나가기</button> */}
        <div className={styles.button_wrapper_right}>
          <button>임시저장</button>
          <button className={styles.button_submit}>등록하기</button>
        </div>
      </div>
      <Line />
      <input
        type="text"
        placeholder="제목을 입력하세요."
        className={styles.new_title}
        {...register("title")}
      />
      <br />
      <ReactQuill
        onChange={onChangeContent}
        placeholder="내용을 입력하세요."
        className={styles.new_content_reactQuill}
      />
    </form>
  );
};

New.displayName = "New";

export default New;
