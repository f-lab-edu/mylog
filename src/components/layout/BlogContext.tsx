import { createContext } from "react";

interface State {
  id: number;
  title: string;
  content: string;
  createdDate: number;
}

export const BlogStateContext = createContext<State[]>([]);
export const BlogDispatchContext = createContext<{
  onCreate: (title: string, content: string) => void;
}>({ onCreate: () => {} });
