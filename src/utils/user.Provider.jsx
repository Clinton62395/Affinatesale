import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "./axios";
import { UserContext } from "./userContext";

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  //   const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    referralCode: "",
    country: "",
    rank: "Beginner",
    availableBalance: 0,
    totalEarning: 0,
    payouts: 0,
    totalRefferal: 0,
    affiliateLink: "",
    image: "",

    bank: {
      orangeMoney: "",
      opay: "",
      mobileMoney: "",
    },

    currency: "USD",

    bankDetails: {
      accountname: "",
      accountNo: 0,
      bank: "",
    },

    withdrawalSettings: {
      withdrawalPin: "",
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const dataParse = JSON.parse(saved);
      setUser((prevUser) => ({ ...prevUser, ...dataParse }));
    }
    const getUserDashboard = async () => {
      try {
        const res = await api.get("fetch-dashboard-statistic");
        if (res) {
          toast.success(
            res.data.message || res.message || "user info fetched successfully"
          );

          console.log("full info about user ", res);
          const userData = res.data.user || res.data.data;
          console.log("les informations de user", userData);

          setUser((prevUser) => ({ ...prevUser, ...userData }));
          localStorage.setItem("user", JSON.stringify(userData));
        }
      } catch (err) {
        let errorMsg = " an uninspected error occured";

        console.error("error when fetching user data", err);
        if (err.response) {
          toast.error(errorMsg || "error when fetching user data ");
          errorMsg =
            err.response?.data.message || "error when fetching user data";
        }
        if (err.response.status === 401) {
          errorMsg = "token expired, please login again";

          setError(errorMsg);
          toast.error(errorMsg);

          setTimeout(() => {
            navigate("/auth/sign-in");
          }, 1000);

          return;
        } else if (err.response) {
          errorMsg =
            err.response?.data.message || "error when fetching user data";
        } else if (err.request) {
          errorMsg = "network error occured";
        }

        setError(errorMsg);
        toast.error(errorMsg);
      }
    };

    getUserDashboard();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
