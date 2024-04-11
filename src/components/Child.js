import React from "react";

const Child = (props) => {
  console.log();
  return (
    <div>
      <h1 data-ns-test="project-name">{props.data.name}</h1>
      <h6 data-ns-test="project-description">{props.data.description}</h6>
    </div>
  );
};
export default Child;
