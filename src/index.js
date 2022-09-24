import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Routes ,Route ,BrowserRouter } from "react-router-dom";
import {SearchBooks} from './SearchBooks'
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<App />}/>
    <Route path="/Search" element={<SearchBooks/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
