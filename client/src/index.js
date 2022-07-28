import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Singular from './Singular';
import PageNotFound from './PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index element={<App />}/>
    <Route path="/115%20East%2090th%20Street" element={<Singular />}/>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>
  
);