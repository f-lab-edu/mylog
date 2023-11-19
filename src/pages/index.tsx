import { useContext, useEffect, useState } from "react";
import { BlogStateContext } from "../components/layout/BlogContext";
import BlogList from "./list/index";
import { memo } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}

const Home = () => {
  return (
    <section>
      <BlogList />
    </section>
  );
};

Home.displayName = "Home";

export default memo(Home);
