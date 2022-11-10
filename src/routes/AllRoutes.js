import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/authentications/SignIn";
import Report from "../pages/authentications/Report"
import Home from "../pages/authentications/Home";
import sidebarItems from "../utils/sidebarItems";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    {sidebarItems.map((sidebarItem) => (
      <Route
        key={sidebarItem.id}
        path={sidebarItem.link}
        element={<ProtectedRoute redirectTo='/interactive'>{sidebarItem.component}</ProtectedRoute>}
      />
    ))}
    <Route path="/" element={<Home />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/Report" element={<Report />} />
  </Routes>
);

export default AllRoutes;
