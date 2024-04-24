import { Routes, Route, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList.jsx";
import ColorPage from "./ColorPage.jsx";
import ColorForm from "./ColorForm.jsx";

const RoutesList = ({ colors, addColor }) => {
  return (
    <Routes>
      <Route path="/colors" exact element={<ColorsList colors={colors} />} />
      <Route
        path="/colors/:name"
        exact
        element={<ColorPage colors={colors} />}
      />
      <Route
        path="/colors/new"
        exact
        element={<ColorForm colors={colors} addColor={addColor} />}
      />
      <Route path="/*" element={<Navigate to="/colors" replace />} />
    </Routes>
  );
};

export default RoutesList;
