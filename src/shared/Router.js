import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Todowrite from "../pages/Todowrite";
import Todolist from "../pages/Todolist";
import Tododetail from "../pages/Tododetail";
import Todoedit from "../pages/Todoedit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Todowrite" element={<Todowrite />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Tododetail/:id" element={<Tododetail />} />
        <Route path="/Todoedit/:id" element={<Todoedit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
