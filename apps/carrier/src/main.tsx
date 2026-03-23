import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CarrierLiveTrack from "./CarrierLiveTrack";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import GoogleMapsLoader from "./GoogleMapsLoader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/*" element={<App />} />
        <Route
          path="/live-track/:deliveryId"
          element={
            <GoogleMapsLoader>
              <CarrierLiveTrack />
            </GoogleMapsLoader>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
