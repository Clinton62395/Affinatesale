import { FolderOutput } from "lucide-react";
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
      const access = localStorage.getItem("accessToken");
      const refresh = localStorage.getItem("refreshToken");

      //   delete token variable
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
      setIsLoaging(false);
    }, 1000);
  };
  return (
    <>
      <div className=" min-h-screen ml-64 md:ml-2 inline-block justify-center md:justify-start">
        <button
          onClick={logout}
          disabled={isLoading}
          className="group
        flex items-center justify-center gap-2
        px-4 py-2 min-w-[150px]
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
              <span className="flex gap-2 items-center text-white">
                {" "}
                Déconnexion...
              </span>
            </>
          ) : (
            <span className=" flex gap-4 items-center">
              <FolderOutput className="group-hover:-translate-x-4 transition-all duration-500" />
              logout
            </span>
          )}
        </button>
      </div>
    </>
  );
};
