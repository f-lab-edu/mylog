import { memo } from "react";
import Write from "../Write";

const New = () => {
  return <Write isEdit={false} />;
};

New.displayName = "New";
export default memo(New);
