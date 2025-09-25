import React, { useState, useEffect, useContext, use } from "react";
import { Camera, Save } from "lucide-react";
import { UserContext } from "../utils/userContext";
import api from "../utils/axios";
import { CircleLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
export const AcountSetting = () => {
  const [isActive, setIsActive] = useState("Account");

  return (
    <div className="h-screen ">
      {" "}
      <div className="flex space-x-8 mb-8 justify-center">
        <button
          onClick={() => setIsActive("Account")}
          className={` pb-2 ${
            isActive === "Account"
              ? "border-b-2 border-blue-500 text-[#0c54fc] text-xl font-bold"
              : "text-gray-900 font-medium"
          } transition-all duration-500  `}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setIsActive("PasswordChange")}
          className={` pb-2 ${
            isActive === "PasswordChange"
              ? "border-b-2 border-blue-500 text-[#0c54fc] text-xl font-bold"
              : "text-gray-900 font-medium"
          } transition-all duration-500  `}
        >
          Change Password
        </button>
        <button
          onClick={() => setIsActive("PictureChange")}
          className={` pb-2 ${
            isActive === "PictureChange"
              ? "border-b-2 border-blue-500 text-[#0c54fc] text-xl font-bold"
              : "text-gray-900 font-medium"
          } transition-all duration-500  `}
        >
          Change Picture
        </button>
      </div>
      {/* display component according the condition */}
      {isActive === "Account" && <Account />}
      {isActive === "PasswordChange" && <PasswordChange />}
      {isActive === "PictureChange" && <PictureChange />}
    </div>
  );
};

export const Account = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bank, setBank] = useState([]);

  const [formData, setFormData] = useState({
    phoneNumber: "+234***********",
    country: "Nigeria",
    bank: "**********",
    accountNo: "**********",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // fetch banks from backend

  // useEffect(() => {
  //   const fetchBanks = async () => {
  //     try {
  //       const bankRes = await axios.get(`${BASE_URL}/api/scrape-banks`);
  //       const data = bankRes.data.data || bankRes.data || [];
  //       console.log("Fetched banks:==>", data);
  //       setBank(data);
  //     } catch (err) {
  //       console.error("Error fetching banks:", err);
  //     }
  //   };

  //   fetchBanks();
  // }, []);

  const handleSubmitBankDetails = async (e) => {
    e.preventDefault();

    const error = {};
    if (!formData.phoneNumber) {
      error.phoneNumber = "Phone number is required";
    }
    if (!formData.country) {
      error.country = "Country is required";
    }
    if (!formData.bank) {
      error.bank = "Account name is required";
    }
    if (!formData.accountNo) {
      error.accountNo = "Account number is required";
    }
    if (!/^\d{10}$/.test(formData.accountNo)) {
      error.accountNo = "Account number must be exactly 10 digits";
    }

    if (Object.keys(error).length > 0) {
      toast.error("Please fill in all fields");
      setError(error);
      return;
    }

    try {
      const response = await api.patch("/user/bank", formData);
      console.log("Profile update response:", response.data.user);
      setFormData({
        phoneNumber: "+234***********",
        country: "Nigeria",
        bank: "**********",
        accountNo: "**********",
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <div className="bg-gray-50  p-4 mx-auto max-w-4xl my-5">
        {/* Header */}
        <div className="flex  mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Account Settings
            </h2>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmitBankDetails} className="space-y-4">
          <div className="bg-[#271A44] p-4  rounded-lg">
            <label className="  block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <div className="w-full bg-transparent text-gray-300 text-sm ">
              <input
                type="text"
                required
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full bg-transparent text-gray-300 text-sm outline-none"
                placeholder="+234***********"
              />
              <div>
                {error.phoneNumber && (
                  <span className="text-red-500 text-xs">
                    {error.phoneNumber}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#271A44] p-4  rounded-lg">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Address
            </label>
            <div className="w-full bg-transparent text-gray-300 text-sm outline-none ">
              <input
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full h-full bg-transparent text-gray-300 text-sm outline-none "
                placeholder="Oyo-State--"
              />
              <div>
                {error.address && (
                  <span className="text-red-500 text-xs">{error.country}</span>
                )}
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-[#271A44] p-4  rounded-lg mb-3 relative">
            <div className=" mb-2">
              <label className="text-sm font-medium text-gray-400">
                Account Number
              </label>
              <input
                value={formData.accountNo}
                onChange={(e) => handleInputChange("accountNo", e.target.value)}
                className="w-full h-full bg-transparent text-gray-200 text-sm outline-none "
                placeholder="223344556"
                maxLength={10}
              />
              <span className=" absolute top-7 right-5 bg-gradient-to-r from-blue-500 via-purple-700 to-purple-500 text-white px-3 py-1 rounded text-xs font-medium">
                1001 * 124 Plug
              </span>
              <div>
                {error.accountNo && (
                  <span className="text-red-500 text-xs">
                    {error.accountNo}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Account Name */}
          {/* <div className="mb-4 bg-[#271A44] p-4  rounded-lg">
            <label className="block text-xs text-gray-400 mb-1">
              Account Name
            </label>
            <div className=" rounded-lg p-4">
              <input
                type="text"
                value={formData.accountName}
                onChange={(e) =>
                  handleInputChange("accountName", e.target.value)
                }
                className="w-full bg-transparent text-gray-300 text-sm outline-none"
                placeholder="**********"
              />
            </div>
          </div> */}

          {/* Account No */}

          {/* Bank */}
          <div className="mb-6 bg-[#271A44] p-4  rounded-lg">
            <label className="block text-xs text-gray-400 mb-1">
              {" "}
              Account Name
            </label>
            <div className=" rounded-lg p-4">
              <select
                value={formData.bank}
                onChange={(e) => handleInputChange("bank", e.target.value)}
                className="w-full bg-transparent text-gray-300 text-sm outline-none appearance-none"
              >
                <option value="" className="bg-purple-900">
                  Select Bank
                </option>
                {user.bank &&
                  Object.entries(user.bank || {}).map(([key, value]) => (
                    <option key={key} value={key} className="bg-purple-900">
                      {value}
                    </option>
                  ))}
                <div>
                  {error.bank && (
                    <span className="text-red-500 text-xs">{error.bank}</span>
                  )}
                </div>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              disabled={() => setIsSubmitting(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Save Change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// password updating component

export const PasswordChange = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // État pour le mot de passe
  const [userPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordAgain: "",
  });

  // État pour le PIN
  const [withdrawalPin, setWithdrawalPin] = useState({
    newPink: "",
    confirmPin: "",
  });

  // État pour le PIN existant
  const [existingPin, setExistingPin] = useState({
    currentPin: "",
    newPin: "",
    newPinAgain: "",
  });

  // Gestionnaires d'événements
  const handlePasswordUpdate = (field, value) => {
    setUserPassword((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNewPinUpdate = (field, value) => {
    setWithdrawalPin((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExistingPinUpdate = (field, value) => {
    setExistingPin((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Soumission du mot de passe
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (userPassword.newPassword !== userPassword.newPasswordAgain) {
        throw new Error("New passwords do not match");
      }

      await api.put("/user/dashboard-password-update", {
        currentPassword: userPassword.currentPassword,
        newPassword: userPassword.newPassword,
        newPasswordAgain: userPassword.newPasswordAgain,
      });

      toast.success("Password updated successfully");
      setUserPassword({
        currentPassword: "",
        newPassword: "",
        newPasswordAgain: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || "Error updating password");
    } finally {
      setIsLoading(false);
    }
  };

  // Initialisation du PIN
  const handleNewPinSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (withdrawalPin.newPink !== withdrawalPin.confirmPin) {
        throw new Error("PINs do not match");
      }

      const res = await api.post("/user/create-pin", {
        newPink: withdrawalPin.newPink,
        confirmPin: withdrawalPin.confirmPin,
      });
      console.log("Response:===>", res.data);

      toast.success("PIN initialized successfully");
      setWithdrawalPin({ newPink: "", confirmPin: "" });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || "Error initializing PIN");
    } finally {
      setIsLoading(false);
    }
  };

  // Mise à jour du PIN existant
  const handleExistingPinSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (existingPin.newPin !== existingPin.newPinAgain) {
        throw new Error("New PINs do not match");
      }

      await api.put("/user/update-pin", {
        currentPin: existingPin.currentPin,
        newPin: existingPin.newPin,
      });

      toast.success("PIN updated successfully");
      setExistingPin({ currentPin: "", newPin: "", newPinAgain: "" });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || "Error updating PIN");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Formulaire de mot de passe */}
      <form
        onSubmit={handlePasswordSubmit}
        className="bg-[#271A44]/90 p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold text-white mb-6">
          Change Password
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Current Password
            </label>
            <input
              type="password"
              value={userPassword.currentPassword}
              onChange={(e) =>
                handlePasswordUpdate("currentPassword", e.target.value)
              }
              className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              New Password
            </label>
            <input
              type="password"
              value={userPassword.newPassword}
              onChange={(e) =>
                handlePasswordUpdate("newPassword", e.target.value)
              }
              className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Confirm New Password
            </label>
            <input
              type="password"
              value={userPassword.newPasswordAgain}
              onChange={(e) =>
                handlePasswordUpdate("newPasswordAgain", e.target.value)
              }
              className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00D78A] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            {isLoading ? (
              <CircleLoader size={20} color="#ffffff" />
            ) : (
              "Update Password"
            )}
          </button>
        </div>
      </form>

      {/* ___________________________________________________________________________________________ */}

      {/* Section PIN */}
      <div className="bg-[#271A44]/90 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-6">
          Withdrawal PIN
        </h2>

        {/* Afficher soit le formulaire d'initialisation, soit le formulaire de mise à jour */}
        {!user.hasPin ? (
          // Formulaire d'initialisation du PIN
          <form onSubmit={handleNewPinSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                New PIN
              </label>
              <input
                type="password"
                maxLength="4"
                value={withdrawalPin.newPink}
                onChange={(e) => handleNewPinUpdate("newPink", e.target.value)}
                className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 4-digit PIN"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Confirm PIN
              </label>
              <input
                type="password"
                maxLength="4"
                value={withdrawalPin.confirmPin}
                onChange={(e) =>
                  handleNewPinUpdate("confirmPin", e.target.value)
                }
                className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm 4-digit PIN"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00D78A] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              {isLoading ? (
                <CircleLoader size={20} color="#ffffff" />
              ) : (
                "Set PIN"
              )}
            </button>
          </form>
        ) : (
          // Formulaire de mise à jour du PIN
          <form onSubmit={handleExistingPinSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Current PIN
              </label>
              <input
                type="password"
                maxLength="4"
                value={existingPin.currentPin}
                onChange={(e) =>
                  handleExistingPinUpdate("currentPin", e.target.value)
                }
                className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter current PIN"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                New PIN
              </label>
              <input
                type="password"
                maxLength="4"
                value={existingPin.newPin}
                onChange={(e) =>
                  handleExistingPinUpdate("newPin", e.target.value)
                }
                className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new PIN"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Confirm New PIN
              </label>
              <input
                type="password"
                maxLength="4"
                value={existingPin.newPinAgain}
                onChange={(e) =>
                  handleExistingPinUpdate("newPinAgain", e.target.value)
                }
                className="w-full bg-[#271A44] text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new PIN"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00D78A] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              {isLoading ? (
                <CircleLoader size={20} color="#ffffff" />
              ) : (
                "Update PIN"
              )}
            </button>
          </form>
        )}
      </div>

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};
// image utpdating component

export const PictureChange = () => {
  const [isloading, setIsloading] = useState(false);
  const [picture, setPicture] = useState({
    // currentImage: null,
    previewUrl: null,
  });
  const handleUpdate = (file) => {
    if (file) {
      setPicture({
        file: file,
        previewUrl: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    setIsloading(true);
    try {
      e.preventDefault();

      if (!picture.file) {
        toast.error("image is not provided");
        return;
      }

      const formData = new FormData();
      formData.append("file", picture.file);
      const res = await api.post(`/user/upload-file`, formData);
      if (res) {
        res.data;
        setPicture({
          previewUrl: null,
          file: null,
        });
        toast.success("image uploaded successfully ✅");
        console.log("details about image uploaded====>", res.data);

        const imageUrl = res.data.imageUrl;
        console.log("here is user image link ===>", imageUrl);

        if (imageUrl) {
          const updatedRes = await api.put(`/user/profile-picture`, {
            imageUrl,
          });
          console.log(
            "user picture updated successfully",
            updatedRes.data.user
          );
        }
      }
    } catch (err) {
      console.error("error when uploding file ", err);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto p-5">
      <form onSubmit={handleSubmit}>
        <div className="w-52 h-52 rounded-full mx-auto shadow-lg flex justify-center items-center bg-gray-300">
          <label>
            {picture.previewUrl ? (
              <div className="relative w-52 h-52">
                <img
                  src={picture.previewUrl}
                  alt="preview"
                  className="w-52 h-52 p-1 rounded-full shadow-sm object-contain object-center"
                />
                {isloading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full">
                    <CircleLoader size={35} color="#fff" />
                  </div>
                )}
              </div>
            ) : (
              <Camera size={50} />
            )}

            <input
              type="file"
              onChange={(e) => handleUpdate(e.target.files[0])}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

        <div className="flex gap-2 justify-end items-center">
          <button
            type="submit"
            className="bg-[#00D78A] text-white text-xl font-semibold py-2 px-5 text-center   hover:bg-green-700 duration-200 transition-all rounded-xl"
          >
            {isloading ? (
              <CircleLoader size={25} />
            ) : (
              <span className="flex gap-2">
                Save Change <Save />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcountSetting;
