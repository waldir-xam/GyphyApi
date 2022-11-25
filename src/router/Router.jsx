import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AddCategory } from "../components/AddCategory";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
