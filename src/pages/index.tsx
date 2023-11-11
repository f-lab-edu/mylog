import { useContext, useState } from "react";
import { BlogStateContext } from "../components/layout/BlogContext";
import BlogList from "./blogList/BlogList";

export default function Home() {
  const blogList = useContext(BlogStateContext);
  const [data, setData] = useState([]);
  return (
    <section>
      index.tsx
      <BlogList blogList={data} />
    </section>
  );
}
