import Line from "@/components/common/Line";
import BlogItem from "../../components/layout/BlogItem";
import { memo, useEffect, useState } from "react";
import { Database } from "@/lib/supabase/schema";
import { supabase } from "@/lib/supabase/initSupabase";

type Blog = Database["public"]["Tables"]["blog"]["Row"];

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: blogs, error } = await supabase
          .from("blog")
          .select("*")
          .order("id", { ascending: false });

        if (error) {
          throw error;
        }

        setBlogs(blogs);
        console.log("Supabase 연결 성공:", blogs);
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
      <h4>{blogs.length}개의 글이 있습니다.</h4>
      <Line />
      <div>
        {blogs.map((posts: Blog) => (
          <BlogItem key={posts.id} {...posts} />
        ))}
      </div>
    </div>
  );
};

Blogs.displayName = "blogs";
export default memo(Blogs);
