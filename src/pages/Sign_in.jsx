import React from "react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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

            {/* Champ Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
                required
              />
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
              <a
                href="#"
                className="text-green-400 hover:text-green-500 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Bouton Login */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out"
            >
              Login
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
              <a
                href="#"
                className="text-green-400 hover:text-green-500 font-medium"
              >
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
