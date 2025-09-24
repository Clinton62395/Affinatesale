import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/axios";

export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   find id and token using usesearchparams of react dom
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const id = searchParams.get("id");
  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!newPassword) {
      newErrors.newPassword = "the new password is required";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "the password must contain 8 characteres";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        newPassword
      )
    ) {
      newErrors.newPassword =
        "the new password must contain at least one capital letter, one lower letter, one digit and one special charactere";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "confirm password is required";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "the passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const data = { newPassword, token, id };
      // Simuler un appel API

      const res = await api.patch(`/user/update-password`, data);
      setNewPassword("");
      setConfirmPassword("");
      toast.success(res.data.message || "password update successfully");

      setTimeout(() => {
        navigate("/auth/sign-in");
      }, 2000);
      console.log(res);
    } catch (error) {
      console.error("error occured when updating:", error);
      if (error) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("network error occured");
      } else {
        toast.error("uninspeted error occured");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="h-20" />
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Reset password!
            </h2>
            <p className="text-gray-600 mb-8">
              your password has been updated succesfully , you can now log into
              your account
            </p>

            <Link
              to="/auth/reset-password"
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go back</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="h-20" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Key className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Reset your password
          </h2>
          <p className="text-gray-600">Confirm you password</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* New Password Field */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              new password
            </label>
            <div className="relative">
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={validateForm}
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                className={`w-full px-4 py-3 outline-none border rounded-lg pr-12 focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-colors ${
                  errors.newPassword ? "border-red-300" : "border-green-500"
                }`}
                placeholder="add your new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={validateForm}
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className={`w-full px-4 py-3 outline-none border  rounded-lg pr-12 focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-colors ${
                  errors.confirmPassword ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="add your confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <CircleLoader size={20} />
                <span>updating...</span>
              </div>
            ) : (
              "reset your password"
            )}
          </button>
        </div>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link
            to="/auth/sign-in"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back to the login </span>
          </Link>
        </div>

        {/* Password Requirements */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Password Requirements :
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• At leat 8 caracteres</li>
            <li>• one capital letter</li>
            <li>• one small letter </li>
            <li>• Une digit</li>
            <li>• one special caractere (@$!%*?&)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
