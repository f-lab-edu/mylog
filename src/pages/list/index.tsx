import Line from "@/components/common/Line";
import BlogItem from "../../components/layout/BlogItem";
import styles from "../../styles/Component.module.css";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import supabase from "@/lib/supabase/client";

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
  const numberOfBlogPosts: number = blogLists ? blogLists.length : 0;
  const blogPosts: Blog[] = blogLists ?? [];

  return (
    <div>
      <h2>블로그 리스트</h2>
      <h4>{numberOfBlogPosts}개의 글이 있습니다.</h4>
      <Line />
      <div>
        {blogPosts.map((lists: Blog) => (
          <BlogItem key={lists.id} {...lists} />
        ))}
      </div>
    </div>
  );
};

BlogLists.displayName = "BlogLists";

export default memo(BlogLists);
