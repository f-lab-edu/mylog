import { useContext, useEffect, useState } from "react";
import { BlogStateContext } from "../components/layout/BlogContext";
import BlogList from "./list/index";
import supabase from "../lib/supabase/client";
import { memo } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}

const mockData: Blog[] = [
  {
    id: 1,
    title: "블로그 1번 글 제목",
    content: "블로그 1번 글 내용",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    title: "블로그 2번 글 제목",
    content: "블로그 2번 글 내용",
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    title: "블로그 3번 글 제목",
    content: "블로그 3번 글 내용",
    createdDate: new Date().getTime(),
  },
];

const Home = () => {
  const blogLists = useContext(BlogStateContext);
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("blog")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          throw error;
        }

        setData(data);
        console.log("Supabase 연결 성공:", data);
      } catch (error) {
        if (error instanceof Error)
          console.log("Supabase 데이터 가져오는 중 오류 >> ", error.message);
      }
    };
    fetchData();
  }, [supabase]);

  return (
    <section>
      <BlogList blogLists={mockData} />
      <BlogList blogLists={data} />
    </section>
  );
};

Home.displayName = "Home";

export default memo(Home);
