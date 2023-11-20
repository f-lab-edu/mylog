import Line from "@/components/common/Line";
import BlogItem from "../../components/layout/BlogItem";
import { memo, useEffect, useState } from "react";
import { Database } from "@/lib/supabase/schema";
import { supabase } from "@/lib/supabase/initSupabase";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

const BlogLists = () => {
  const [blogLists, setBlogLists] = useState<Blog[]>([]);
  const numberOfBlogs: number = blogLists ? blogLists.length : 0;
  const fetchedBlogs: Blog[] = blogLists ?? [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: blogLists, error } = await supabase
          .from("blog")
          .select("*")
          .order("id", { ascending: false });

        if (error) {
          throw error;
        }

        setBlogLists(blogLists);
        console.log("Supabase 연결 성공:", blogLists);
      } catch (error) {
        if (error instanceof Error)
          console.log("Supabase 데이터 가져오는 중 오류 >> ", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>블로그 리스트</h2>
      <h4>{numberOfBlogs}개의 글이 있습니다.</h4>
      <Line />
      <div>
        {fetchedBlogs.map((posts: Blog) => (
          <BlogItem key={posts.id} {...posts} />
        ))}
      </div>
    </div>
  );
};

BlogLists.displayName = "BlogLists";

export default memo(BlogLists);
