import React from "react";
import FormMainControl from "./view/FormMainControl";
import "./assets/scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage4 from "./forms/FormPage4";

const App = () => {
  return (
    <>
    <Router>
     
     <Routes>
       <Route path="/" exact element={<FormMainControl />}/>
       <Route path="/FormPage4" exact element={<FormPage4/>} />
     </Routes>
   </Router>
      
    </>
  );
};

export default App;
