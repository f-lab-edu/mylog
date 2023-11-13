import { useContext, useState } from "react";
import { BlogStateContext } from "../components/layout/BlogContext";
import BlogList from "./blogList/index";

const Home = () => {
  const blogList = useContext(BlogStateContext);
  const [data, setData] = useState([]);
  return (
    <section>
      <BlogList blogList={data} />
    </section>
  );
};

export default Home;
