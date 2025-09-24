import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  
  useEffect(() => {
    const token = !!localStorage.getItem("accessToken");

    const isTokenValid = token && token !== "undefined" && token !== "null";

    setIsAuth(!!isTokenValid);
    console.log("is token valid", isTokenValid);
  }, []);

  if (isAuth === null) {
    return (
      <div className="text-2xl text-center text-yellow-200 bg-black/20 h-screen flex justify-center items-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

  if (!isAuth) {
    return (
      <>
        <Navigate to="/auth/sign-in" replace />
      </>
    );
  } else {
    return <>{children}</>;
  }
};
