import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { IAuth } from "../interfaces/IAuth";
import { authProvider } from "../api/auth";

const AuthContext = React.createContext<IAuth>(null!);

const useAuth = () => React.useContext(AuthContext);

const getUser = () => localStorage.getItem("user");

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth();
  let auth = getUser();
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: any, callback: VoidFunction) => {
    return authProvider.signin(() => {
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      localStorage.removeItem("user");
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { getUser, useAuth, RequireAuth, AuthProvider };
