import { Routes, Route } from "react-router-dom";
import { Home, NasaApod } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasa-apod" element={<NasaApod />} />
      </Routes>
    </>
  );
};
