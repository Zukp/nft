import React from "react";
import { Routes, Route } from "react-router-dom";
import All from "../all/All";
import Sectionid from "../../components/section/Sectionid";

const RoutesAll = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/about/:id" element={<Sectionid />} />
      </Routes>
    </div>
  );
};

export default RoutesAll;
