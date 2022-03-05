import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Auth components
import { RequireAuth, AuthProvider } from "./auth";
import { Register, Login } from "../pages/auth";

// Page components
import Home from "../pages/home";
import Room from "../pages/room";
import Chat from "../pages/chat";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/room"
            element={
              <RequireAuth>
                <Room />
              </RequireAuth>
            }
          />
          <Route
            path="/:room/:user"
            element={
              <RequireAuth>
                <Chat />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
