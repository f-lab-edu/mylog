import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>View</h1>
      <p>블로그 View</p>
    </div>
  );
};

export default View;