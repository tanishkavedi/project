import React from "react";
import ReactDOM from"react-dom/client";

const Heading=()=>(
  <div>
  <h1 className="root">THIS IS REACT CODE</h1>
  </div>
);
const root=ReactDOM.createRoot(document.getElementById("container"));
root.render(<Heading/>);
