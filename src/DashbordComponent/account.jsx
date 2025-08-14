import React from "react";
import { Camera, Save } from "lucide-react";
import { useState } from "react";
import { preview } from "vite";

export const AcountSetting = () => {
  const [isActive, setIsActive] = useState("Account");

  return (
    <div className="h-screen ">
      {" "}
      <div className="flex space-x-8 mb-8">
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
  const [formData, setFormData] = useState({
    phoneNumber: "+234***********",
    address: "oyo-State",
    accountName: "**********",
    accountNo: "**********",
    bank: "First Bank",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
        <div className="space-y-4 ">
          {/* Phone Number */}
          <div className="bg-[#271A44] p-4  rounded-lg">
            <label className="  block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <div className=" ">
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full bg-transparent text-gray-300 text-sm outline-none"
                placeholder="+234***********"
              />
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#271A44] p-4  rounded-lg">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Address
            </label>
            <div className="">
              <input
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full h-full bg-transparent text-gray-300 text-sm outline-none "
                placeholder="Oyo-State--"
              />
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-[#271A44] p-4  rounded-lg mb-3">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-400">
                Bank Details
              </label>
              <span className=" text-white px-3 py-1 rounded text-xs font-medium">
                1001 * 124 Plug
              </span>
            </div>
          </div>

          {/* Account Name */}
          <div className="mb-4 bg-[#271A44] p-4  rounded-lg">
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
          </div>

          {/* Account No */}
          <div className="mb-4 bg-[#271A44] p-4  rounded-lg">
            <label className="block text-xs text-gray-400 mb-1">
              Account No
            </label>
            <div className=" rounded-lg p-4">
              <input
                type="text"
                value={formData.accountNo}
                onChange={(e) => handleInputChange("accountNo", e.target.value)}
                className="w-full bg-transparent text-gray-300 text-sm outline-none"
                placeholder="**********"
              />
            </div>
          </div>

          {/* Bank */}
          <div className="mb-6 bg-[#271A44] p-4  rounded-lg">
            <label className="block text-xs text-gray-400 mb-1">Bank</label>
            <div className=" rounded-lg p-4">
              <select
                value={formData.bank}
                onChange={(e) => handleInputChange("bank", e.target.value)}
                className="w-full bg-transparent text-gray-300 text-sm outline-none appearance-none"
              >
                <option value="First Bank" className="bg-purple-900">
                  First Bank
                </option>
                <option value="GTBank" className="bg-purple-900">
                  GTBank
                </option>
                <option value="Access Bank" className="bg-purple-900">
                  Access Bank
                </option>
                <option value="UBA" className="bg-purple-900">
                  UBA
                </option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// password updating component

export const PasswordChange = () => {
  // 1. Déclarez tous les états au début du composant
  const [userPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordAgain: "",
  });

  const [withdrawalPin, setWithdrawalPin] = useState({
    currentPin: "",
    newPin: "",
    newPinAgain: "",
  });

  // 2. Déclarez les gestionnaires d'événements
  const handlePasswordUpdate = (field, value) => {
    setUserPassword((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePinUpdate = (field, value) => {
    setWithdrawalPin((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Password updated successfully:", userPassword);
    // Ajoutez ici la logique de validation et d'envoi du mot de passe
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    console.log("Withdrawal pin updated successfully:", withdrawalPin);
    // Ajoutez ici la logique de validation et d'envoi du code PIN
  };

  return (
    <div className="space-x-4 ">
      {/* Premier formulaire : Mots de passe */}
      <form onSubmit={handlePasswordSubmit}>
        <div className="bg-[#271A44] p-4  mb-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            current Password
          </label>
          <input
            type="password"
            value={userPassword.currentPassword}
            onChange={(e) =>
              handlePasswordUpdate("currentPassword", e.target.value)
            }
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
          />
        </div>

        <div className="bg-[#271A44] p-4 rounded-lg mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            New password
          </label>
          <input
            type="password"
            value={userPassword.newPassword}
            onChange={(e) =>
              handlePasswordUpdate("newPassword", e.target.value)
            }
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
            placeholder="your new password"
          />
        </div>

        <div className="bg-[#271A44] p-4 rounded-lg mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            New password Again
          </label>
          <input
            type="password"
            value={userPassword.newPasswordAgain}
            onChange={(e) =>
              handlePasswordUpdate("newPasswordAgain", e.target.value)
            }
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
            placeholder="*********"
          />
        </div>
        <div className="flex gap-2 justify-end items-center mb-4">
          <button
            type="submit"
            className="bg-[#00D78A] text-white text-xl font-semibold py-2 px-5 text-center hover:bg-green-700 duration-200 transition-all rounded-xl"
          >
            Save Change <Save />
          </button>
        </div>
      </form>

      {/* Deuxième formulaire : Codes PIN */}
      <form onSubmit={handlePinSubmit} className="mt-10 px-2">
        <legend className="font-semibol text-2xl">Withdrawal Settings</legend>
        <div className="bg-[#271A44] p-4 rounded-lg my-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Withdrawal Pin
          </label>
          <input
            type="password"
            value={withdrawalPin.currentPin}
            onChange={(e) => handlePinUpdate("currentPin", e.target.value)}
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
            placeholder="****"
          />
        </div>

        <div className="bg-[#271A44] p-4 rounded-lg mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            New Withdrawal Pin
          </label>
          <input
            type="password"
            value={withdrawalPin.newPin}
            onChange={(e) => handlePinUpdate("newPin", e.target.value)}
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
            placeholder="****"
          />
        </div>

        <div className="bg-[#271A44] p-4 rounded-lg mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            New Withdrawal Pin Again
          </label>
          <input
            type="password"
            value={withdrawalPin.newPinAgain}
            onChange={(e) => handlePinUpdate("newPinAgain", e.target.value)}
            className="w-full bg-transparent text-gray-300 text-sm outline-none"
            placeholder="****"
          />
        </div>
        <div className="flex gap-2 justify-end items-center my-4">
          <button
            type="submit"
            className="bg-[#00D78A] text-white text-xl font-semibold py-2 px-5 text-center hover:bg-green-700 duration-200 transition-all rounded-xl"
          >
            Save Change <Save />
          </button>
        </div>
      </form>
    </div>
  );
};
// image utpdating component

export const PictureChange = () => {
  const [picture, setPicture] = useState({
    curentImage: null,
    previewUrl: null,
  });
  const handleUpdate = (file) => {
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPicture({
        curentImage: file,
        previewUrl: previewUrl,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-md mx-auto p-5">
      <form onSubmit={handleSubmit}>
        <div className="w-52 h-52 rounded-full mx-auto shadow-lg flex justify-center items-center bg-gray-300">
          <label>
            {picture.previewUrl ? (
              <img
                src={picture.previewUrl}
                alt="preview"
                className="w-full h-full rounded-full shadow-sm object-cover"
              />
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
          <button className="bg-[#00D78A] text-white text-xl font-semibold py-2 px-5 text-center   hover:bg-green-700 duration-200 transition-all rounded-xl">
            Save Change <Save />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcountSetting;
