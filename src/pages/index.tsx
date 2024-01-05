import BlogList from "./list/index";
import { memo } from "react";

const Home = () => {
  return (
    <section>
      <BlogList />
    </section>
  );
};

Home.displayName = "Home";
export default memo(Home);
