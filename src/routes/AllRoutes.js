import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/authentications/SignIn";
import Home from "../pages/authentications/Home";
import sidebarItems from "../utils/sidebarItems";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    {sidebarItems.map((sidebarItem) => (
      <Route
        key={sidebarItem.id}
        path={sidebarItem.link}
        element={<ProtectedRoute redirectTo='/'>{sidebarItem.component}</ProtectedRoute>}
      />
    ))}
    <Route path="/" element={<Home />} />
    <Route path="/SignIn" element={<SignIn />} />
  </Routes>
);

export default AllRoutes;
