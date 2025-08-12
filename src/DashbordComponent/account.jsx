import { useState } from "react";

export const Account = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "+234***********",
    address: "",
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
      <div className="bg-gray-50 min-h-screen p-4 mx-auto max-w-4xl ">
        {/* Header */}
        <div className="flex  mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Account Settings
            </h2>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-8">
          <button className="text-gray-900 font-medium border-b-2 border-gray-900 pb-2">
            Edit Profile
          </button>
          <button className="text-gray-500 font-medium pb-2">
            Change Password
          </button>
          <button className="text-gray-500 font-medium pb-2">
            Change Picture
          </button>
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
