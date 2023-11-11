import styles from "./Button.module.css";

interface Button {
  text: string;
  type: string;
  onClick(): void;
}
export default function Button({ text, type, onClick }: Button) {
  const btnType = ["complete", "delete"].includes(type) ? type : "edit";
  return (
    <button className={["Btn", `Btn_${btnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "edit",
};
