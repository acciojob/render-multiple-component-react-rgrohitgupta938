import React, { Component, useState } from "react";
import "../styles/App.css";
import Child from "./Child";

const App = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
    },
  ];
  return (
    <div id="main">
      {projects.map((p, inx) => (
        <Child data={p} key={inx} />
      ))}
    </div>
  );
};

export default App;
