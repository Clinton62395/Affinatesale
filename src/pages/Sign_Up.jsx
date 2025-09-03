import { Eye, EyeOff } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// firebase config
import {
  auth,
  analytics,
  provider,
  signInWithPopup,
  fProvider,
} from "../config/firebase";
import axios from "axios";
import { BASE_URL } from "../utils/constant.js";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    country: "",
  });
  const handleGoogleSign = async (even) => {
    even.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      if (user) {
        const idToken = await user.getIdToken();

        sendToken(idToken);
      }
    } catch (error) {
      console.error("error when signing up user", error.message);
    }
  };

  // facebook

  const handleFacebookSign = async (even) => {
    even.preventDefault();
    try {
      const result = await signInWithPopup(auth, fProvider);
      const user = result.user;

      const idToken = await user.getIdToken();

      sendToken(idToken);

      console.log(user);
    } catch (error) {
      console.error("error when signing up user", error.message);
    }
  };

  const sendToken = async (idTokenFromLogin) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return console.log("not user yet");
      }
      const idToken = idTokenFromLogin || (await auth.currentUser.getIdToken());

      const response = await axios.post(
        `${BASE_URL}/auth/google`,
        {},
        {
          headers: {
            // prettier-ignore
            "Authorization": `Bearer ${idToken}`,
          },
        }
      );

      console.log("data from backend", idToken);
    } catch (error) {
      console.error(
        "error when sending data to backend ",
        error.response?.data || error.message
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const [contrie, setCountrie] = useState([]);

  useEffect(() => {
    const getAllCounties = async () => {
      const getCountri = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2"
      );
      if (!getCountri.ok) {
        throw new Error("error when loading countries");
      }
      const countries = await getCountri.json();
      console.log("world countri", countries.length);
      setCountrie(
        [...countries].sort((a, b) => {
          const nameA = a.name.common.toLowerCase();
          const nameB = b.name.common.toLowerCase();
          return nameA.localeCompare(nameB);
        })
      );
    };
    getAllCounties();
  }, []);

  //   eyes for password;
  const [view, setView] = useState("password");
  const [confirmView, setConfirmView] = useState("password");

  const togglePassword = () => {
    setView((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleConfirm = () => {
    setConfirmView((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-950 via-blue-950 to-teal-900 relative before:absolute before:content-[''] before:inset-0 before:bg-[url('background.png')] before:bg-center before:bg-cover before:bg-no-repeat  ">
        {/* Container du formulaire */}
        <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-2 py-10 my-10">
          {/* En-tête */}
          <div className="text-center mb-8 space-y-2 flex justify-center items-center mx-auto flex-col">
            <Link to="/">
              <img src="/logo.png" className="h-24" alt="logo" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
          </div>

          {/* Formulaire */}
          <div className="space-y-6">
            {/* Nom et Prénom sur la même ligne */}
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
            {/* Téléphone */}
            <div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
            {/* Mots de passe */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={view}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-5 top-3  cursor-pointer text-gray-500"
                >
                  {view === "text" ? <Eye /> : <EyeOff />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={confirmView}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
                />

                {/* Icône cliquable */}
                <span
                  onClick={toggleConfirm}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {confirmView === "text" ? <Eye /> : <EyeOff />}
                </span>
              </div>
            </div>
            {/* Code de parrainage */}
            <div>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                placeholder="Referral Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
            {/* country */}
            <div>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              >
                <option selected hidden className="text-gray-400">
                  Select a country
                </option>
                {contrie.map((country) => (
                  <option value={country.cca2} key={country.cca2}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
            {/* link to go  sign up */}
            <div className="text-center px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-semibol text-white/90 bg-green-600 w-full hover:bg-green-700 transform translate-scale-[1.2] transition-all transition-300">
              <button onClick={handleSubmit} className=" ">
                {" "}
                Sign Up
              </button>
            </div>
            <div className="space-y-2">
              {/* <p></p> */}
              <div className="relative text-center px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-semibol text-white/90 bg-[#08022be0] w-full hover:bg-[#08022b] transform translate-scale-[1.2] transition-all transition-300">
                <button onClick={handleGoogleSign} type="button" className="">
                  Sign with google
                </button>
                <img
                  src="google-logo.png"
                  alt="google logo"
                  className="h-10 absolute left-3 top-1"
                />
              </div>
              {/* <p></p> */}
              <div className=" -h-3  w-full transform hover:translate-x-2 duration-500 transition-all">
                <button onClick={handleFacebookSign} type="button" className="">
                  <img
                    src="facebooksign.png"
                    alt="facebook logo"
                    className="w-full "
                  />
                </button>
              </div>
            </div>

            {/* Conditions d'utilisation */}
            <div className="space-y-0">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="/terms"
                  className=" text-xs text-teal-600 hover:text-teal-800 underline"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-teal-600 text-xs  hover:text-teal-800 underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
              {/* Lien de connexion */}
              <p className="text-gray-600 text-xs text-center ">
                Already have an account?{" "}
                <a
                  href="/signIn"
                  className="text-gray-900 text-xs text-center hover:text-teal-800 font-semibold transition-colors duration-200"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
