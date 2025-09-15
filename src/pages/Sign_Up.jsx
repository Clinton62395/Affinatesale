import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import { auth, provider, signInWithPopup, fProvider } from "../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { BASE_URL } from "../utils/constant";
import api from "../utils/axios";

//  Définir le schema OUTSIDE du composant
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must be only digits")
    .min(8, "Phone must be at least 8 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  referralCode: yup.string().optional(),
  country: yup.string().required("Please select a country"),
});

function SignUp() {
  //  UN SEUL système de gestion de formulaire

  const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [countries, setCountries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Fonction de soumission CORRECTE
  const onSubmit = async (data) => {
    console.log("Form fexthed envoyees depuis le backend:", data); // ✅ Données réelles du formulaire

    try {
      const res = await api.post("/auth/register", data);
      if (res.status === 201) {
        toast.success(res.data.message || "Registered successfully");

        const user = res.data.user || res.data.data;
        console.log(
          "this all information about data from backend =====>",
          res.data
        );

        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        setUser(user);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed");
      } else if (error.request) {
        toast.error("Network error");
      } else {
        toast.error("unexpected error occured");
      }
    }
  };

  // ✅ Récupération des pays
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        const data = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // handle google sign

  const handleGoogleSign = async () => {
    try {
      const promise = await signInWithPopup(auth, provider);
      const user = promise.user;
      const idToken = await user.getIdToken();

      const backendResponse = await sendTokenToBackend(idToken);
      toast.success(backendResponse.message || "login successfully");
    } catch (error) {
      console.error("error when login", error.message);
      if (error.code) {
        toast.error(error.message || "error credential ");
      } else {
        toast.error(" network error  ");
      }
    }
  };
  const handleFacebookSign = async () => {
    try {
      const result = await signInWithPopup(auth, fProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      const backendResponse = await sendTokenToBackend(idToken);
      toast.success(backendResponse.message || "user login successfully");
    } catch (error) {
      console.error("error when login", error.message);
      if (error.code) {
        toast.error(error.message || "invalid credential");
      } else {
        toast.error("network error");
      }
    }
  };

  // send token to backend
  const sendTokenToBackend = async (token) => {
    try {
      const req = await axios.post(
        `${BASE_URL}/auth/google`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(req.data);
    } catch (error) {
      console.error("error when sending token", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-950 via-blue-950 to-teal-900">
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-8 py-10">
        {/* Header */}

        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.png" className="h-24 mx-auto" alt="logo" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
        </div>

        {/* ✅ Formulaire CORRECT */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              {...register("phoneNumber")}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Password with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/3 transform -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Referral Code */}
          <div>
            <input
              type="text"
              {...register("referralCode")}
              placeholder="Referral Code (Optional)"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Country */}
          <div>
            <select
              {...register("country")}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.cca2} value={country.cca2}>
                  {country.name.common}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <CircleLoader size={20} color="#fff" />
                <span className="ml-2">Creating Account...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleSign}
            className="relative w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img
              src="/google.png"
              alt="Google"
              className="w-8 h-8 mr-3 absolute left-3"
            />
            Continue with Google
          </button>

          <button
            onClick={handleFacebookSign}
            className=" relative w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
              className="w-5 h-5 mr-3 absolute left-3"
            />
            Continue with Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
