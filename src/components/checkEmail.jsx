import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CheckEmail() {


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-8">
            <Link to="/"><img src="/logo.png" className="h-24" alt="logo"/></Link>
          </div>
        </div>

        {/* Icône email */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Mail className="w-8 h-8 text-green-400" />
          </div>
        </div>

        {/* Titre et description */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Check your email
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            open mail app to verify
          </p>
        </div>

        {/* Boutons et liens */}
        <div className="space-y-6">
          {/* Bouton Open Email App */}
          <button
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Open Email App
          </button>

          {/* Lien pour renvoyer l'email */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Didn't receive the email?{" "}
            </span>
            <button
              className="text-green-400 hover:text-green-500 text-sm font-medium transition duration-200"
            >
              Click to resend
            </button>
          </div>

          {/* Lien Back to log in */}
          <div className="text-center pt-4">
            <button
              className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium transition duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
