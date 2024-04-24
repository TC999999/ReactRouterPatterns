import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs.jsx";
import DogDetail from "./DogDetail.jsx";

const RoutesList = ({ dogs }) => {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetail dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
};

export default RoutesList;
