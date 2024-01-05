import { memo } from "react";
import Write from "@/pages/Write";

const Edit = () => {
  return <Write isEdit={true} />;
};

Edit.displayName = "Edit";
export default memo(Edit);
