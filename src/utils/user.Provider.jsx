import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "./axios";
import { UserContext } from "./userContext";

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  //   const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const clearError = () => {
    setError(null);
  };

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
      orangeMoney: "orange Money",
      opay: "opay",
      mobileMoney: "mobile Money",
    },

    currency: "USD",

    bankDetails: {
      accountname: "",
      accountNo: 112255,
      bank: "",
    },

    withdrawalSettings: {
      withdrawalPin: "",
    },
  });

  const getUserDashboard = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await api.get("/user/fetch-dashboard-statistic");
      if (res?.data) {
        console.log("full info about user ", res);
        const userData = res.data.user || res.data.data;
        console.log("les informations de user", userData);

        setUser((prevUser) => ({ ...prevUser, ...userData }));
        localStorage.setItem("user", JSON.stringify(userData));
      }
    } catch (err) {
      let errorMsg = " an unexpected  error occured";
      console.error("error when fetching user data", err);

      if (err.response?.status === 401) {
        errorMsg = "token expired, please login again";

        setError(errorMsg);
        toast.error(errorMsg);

        setTimeout(() => {
          navigate("/auth/sign-in");
        }, 1000);

        return;
      }

      if (err.response) {
        errorMsg =
          err.response?.data?.message || "error when fetching user data";
      } else if (err.request) {
        errorMsg = "network error occured";
      }

      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        const dataParse = JSON.parse(saved);
        setUser((prevUser) => {
          const updateUser = { ...prevUser, ...dataParse };

          localStorage.setItem("user", JSON.stringify(updateUser));
          setIsLoading(false);
          return updateUser;
        });
      } catch (err) {
        console.error("error when parsing", err);
        localStorage.removeItem("user");
        setIsLoading(false);
      }
    }

    if (accessToken) {
      getUserDashboard();
    } else {
      setIsLoading(false);
    }
  }, [accessToken, navigate]);

  const values = {
    user,
    isLoading,
    getUserDashboard,
    error,
    setError,
    clearError,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
