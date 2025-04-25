import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const Home = lazy(() => import("../pages/Home"));
const FlightsList = lazy(() => import("../pages/FlightsList"));
const NotFoundComp = lazy(() => import("../pages/NotFoundComp"));
const SignIn = lazy(()=>import("../pages/SignIn"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights-list" element={<FlightsList />} />
          <Route path="*" element={<NotFoundComp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
