import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../components/Line";
import style from "./Edit.module.css";

// interface ContentState {
//   state: {
//     title: string;
//     date: Date;
//     content: string;
//   };
// }

const Edit = () => {
  const { id } = useParams();
  // const [state, setState] = useState<ContentState["state"]>();
  const [state, setState] = useState({
    title: "title",
    date: new Date(),
    content: "content",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
    console.log(e.target);
  };

  return (
    <>
      <div>
        <h1 id="title" data-value={state.title} onChange={onChange}></h1>
        <div className={style.edit_head_detail}>
          <span>연이</span>
          <span id="date" data-value={state.date} onChange={onChange}></span>
          <button className={style.view_edit_btn}>Save</button>
          <button className={style.view_delete_btn}>Delete</button>
        </div>
        <Line />
      </div>
      <div className={style.view_main_content}>
        <p id="content" data-value={state.content} onChange={onChange}></p>
      </div>
    </>
  );
};

export default Edit;
