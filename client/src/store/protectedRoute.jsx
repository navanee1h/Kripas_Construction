import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    if (error) {
      toast.error("You must be logged in to view this page");
    }
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
