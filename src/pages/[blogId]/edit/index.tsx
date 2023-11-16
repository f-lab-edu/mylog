import { useRef, useState } from "react";
import Line from "../../../components/common/Line";
import style from "../../../styles/Edit.module.css";
import { memo } from "react";

// interface ContentState {
//   Blog: {
//     title: string;
//     date: Date;
//     content: string;
//   };
// }

const Edit = () => {
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
        <button>QS 바꾸기</button>
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

Edit.displayName = "Edit";

export default memo(Edit);
