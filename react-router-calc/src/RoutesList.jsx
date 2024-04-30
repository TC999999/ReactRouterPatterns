import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import Solution from "./Solution.jsx";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/calc" element={<Home />} />
      <Route path="/calc/:operation/:num1/:num2" element={<Solution />} />
      <Route path="*" element={<Navigate to="/calc" replace />} />
    </Routes>
  );
};

export default RoutesList;
