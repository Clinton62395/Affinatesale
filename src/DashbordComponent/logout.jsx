import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export const Logout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoaging] = useState(false);
  const logout = () => {
    setIsLoaging(true);
    setTimeout(() => {
      const access = localStorage.getItem("access_token");
      const refresh = localStorage.getItem("refresh_Token");

      //   delete token variable
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/");
      setIsLoaging(false);
    }, 1000);

    console.log("deconnexion", refresh, access);
  };
  return (
    <>
      <button
        onClick={logout}
        disabled={isLoading}
        className="
        flex items-center justify-center gap-2 
        px-4 py-2 min-w-[100px]
        bg-red-600 hover:bg-red-700 
        disabled:bg-red-400 disabled:cursor-not-allowed
        text-white font-medium text-sm
        rounded-lg shadow-sm hover:shadow-md
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
      "
      >
        {isLoading ? (
          <>
            <CircleLoader size={16} color="white" />
            <span>Déconnexion...</span>
          </>
        ) : (
          "Se déconnecter"
        )}
      </button>
    </>
  );
};
