import Button from "@/components/common/Button";
import BlogItem from "../../components/layout/BlogItem";
import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";

interface State {
  id: number;
  title: string;
  content: string;
  date: number;
}
interface BlogListProps {
  blogList: State[];
}

export default function BlogList({ blogList }: BlogListProps) {
  const router = useRouter();
  const onClickMoveToNew = () => {
    router.push("new");
  };

  return (
    <div className={styles.BlogList}>
      <div className={styles.menu_wrapper}>
        <Button text={"새 글 작성"} onClick={onClickMoveToNew} />
      </div>
      {blogList.map((list: State) => (
        <BlogItem key={list.id} {...list} />
      ))}
    </div>
  );
}
