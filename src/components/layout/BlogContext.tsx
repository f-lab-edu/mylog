import { createContext } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}

export const BlogStateContext = createContext<Blog[]>([]);
export const BlogDispatchContext = createContext<{
  onCreate: (title: string, content: string) => void;
}>({ onCreate: () => {} });
