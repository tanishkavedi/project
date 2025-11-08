import React from "react";
import ReactDOM from"react-dom/client";
import Heading from "./components/Heading.js";
import Body from "./components/Body.js";


 
                
  

  
  
const Foodapp = () => {
  return(
  <div className="foodapp">
    <Heading/>
    <Body/>
  </div>
  );
};

const root=ReactDOM.createRoot(document.getElementById("container"));
root.render(<Foodapp/>);
