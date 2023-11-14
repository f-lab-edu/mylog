import Line from "@/components/common/Line";
import BlogItem from "../../components/layout/BlogItem";
import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { memo } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}
interface BlogListProps {
  blogLists: Blog[];
}

const BlogLists = ({ blogLists }: BlogListProps) => {
  const router = useRouter();

  return (
    <div>
      <h2>블로그 리스트</h2>
      <h4>{blogLists.length}개의 글이 있습니다.</h4>
      <Line />
      <div>
        {blogLists.map((lists: Blog) => (
          <BlogItem key={lists.id} {...lists} />
        ))}
      </div>
    </div>
  );
};

BlogLists.displayName = "BlogLists";

export default memo(BlogLists);
