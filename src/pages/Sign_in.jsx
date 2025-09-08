import React, { useState } from "react";

import { toast } from "react-toastify";
import { CircleLoader } from "react-spinners";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Eye, EyeOff } from "lucide-react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const loginSchema = yup.object({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .max(15, "password cannot be mort than 15 characteres")
    .min(5, "password cannot be less than 5 characters"),
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, data);
      console.log("user login ===>>>", data);
      toast.success(res.data.message || "login succesfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("error occured when login", error.message);
      if (error.response) {
        toast.error(error.response.data.message || "email is required");
      }
      {
        toast.error("network error, check your network");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Link to="/">
                {" "}
                <img src="/logo.png" className="h-24" alt="logo" />
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Log in to</h2>
            <h3 className="text-2xl font-bold text-gray-900">your Account</h3>
          </div>

          {/* Formulaire */}
          <form className="space-y-6" onSubmit={handleSubmit(onLogin)}>
            {/* Champ Email */}
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-sm font-semibold text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Champ Password */}
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
              />
              {errors.password && (
                <p className="text-sm font-semibold text-red-500">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember me et Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 rounded focus:ring-green-400 focus:ring-2 mr-2"
                />
                Remember for 30 Days
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-green-400 hover:text-green-500 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Bouton Login */}
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out">
              {isSubmitting ? <CircleLoader size={20} color="#fff" /> : "login"}
            </button>

            {/* Termes et conditions */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By signing up, you agree to our{" "}
              <a href="#" className="text-gray-700 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-gray-700 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            {/* Lien Sign up */}
            <p className="text-sm text-gray-600 text-center">
              Already have account{" "}
              <Link
                to="/auth/sign-up"
                className="text-green-400 hover:text-green-500 font-medium"
              >
                Sign up
              </Link>
              <Link
                to="/auth/reset-password"
                className="text-green-400 hover:text-green-500 font-medium"
              >
                reset-password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
