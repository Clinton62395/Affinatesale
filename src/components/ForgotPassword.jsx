import React, { useState } from "react";
import { ArrowLeft, Key } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import { toast } from "react-toastify";
import api from "../utils/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLaoding, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email };
    setIsLoading(true);

    try {
      const res = await api.post(`/user/reset-password`, data);
      toast.success(res.data.message || "email of password updating was sent ");
    } catch (error) {
      console.error(error.message);
      if (error.response && error.response.data?.message) {
        toast.error("error occured when password updating ");
      } else if (error.request) {
        toast.error("error occured dut to netword");
      } else {
        toast.error("unexpeted error occured");
      }
    } finally {
      setIsLoading(false);
    }

    // Logique de soumission du formulaire
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-8">
            <Link to="/">
              <img src="/logo.png" className="h-24" alt="logo" />
            </Link>
          </div>
        </div>

        {/* Icône clé */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Key className="w-8 h-8 text-green-400" />
          </div>
        </div>

        {/* Titre et description */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Forgot password?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            No worries, we'll send you reset
            <br />
            instructions.
          </p>
        </div>

        {/* Formulaire */}
        <div className="space-y-6">
          {/* Champ Email */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Bouton Login (Reset Password) */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            {isLaoding ? <ClipLoader size={20} /> : "Reset password"}
          </button>

          {/* Lien Back to log in */}
          <div className="text-center pt-4">
            <Link
              to="/auth/sign-in"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium transition duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
