// Components/TransferForm.jsx
import React, { useState, useContext, useEffect } from "react";
import { CircleLoader } from "react-spinners";

import { toast } from "react-toastify";
import api from "./axios";
import { X } from "lucide-react";
import { UserContext } from "./userContext";

export const TransferForm = ({ onClose }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    amount: "",
    receiverAccount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!/^\d{10}$/.test(formData.receiverAccount)) {
      setError((prev) => ({ ...prev, receiverAccount: "" }));
      setOwner(null);

      return;
    }
    const controller = new AbortController();

    const fetchOwner = async () => {
      setIsLoading(true);

      try {
        const res = await api.get(
          `/user/transfer/${formData.receiverAccount}`,
          { signal: controller.signal }
        );

        if (res?.data?.ownerName) {
          setOwner(res.data.ownerName || "invalid account number");
          setError((prev) => ({
            ...prev,
            receiverAccount: "invalid account number",
          }));
        } else {
          setOwner(null);
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setOwner(null);
          setError((prev) => ({
            ...prev,
            receiverAccount: "Account not found",
          }));
        } else if (err.name === "AbortError" || err.name === "CanceledError") {
          console.log("Request was aborted");
        } else {
          setOwner(null);
          setError((prev) => ({
            ...prev,
            receiverAccount: "Error fetching account owner",
          }));
          console.log("Error fetching account owner:", err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchOwner();

    return () => {
      controller.abort();
    };
  }, [formData.receiverAccount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = {};
    setIsLoading(true);
    const amount = parseFloat(formData.amount).toFixed(2).trim();
    if (!amount) {
      error.amount = "amount is required";
    }
    if (amount < 1) {
      error.amount = "amount cannot be less than 1  USD";
    }
    if (!formData.receiverAccount) {
      error.receiverAccount = "Account number is required";
    }
    if (String(formData.receiverAccount).length !== 10) {
      error.receiverAccount = "Account number must be 10 digits";
    }
    setError(error);
    if (Object.keys(error).length > 0) {
      setIsLoading(false);
      return;
    }

    try {
      await api.post("/user/transfer", formData);
      toast.success("Transfer successful");
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Transfer failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#271A44] rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-white mb-6">
          Transfer Funds
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Recipient Account Number
            </label>
            <input
              type="text"
              name="receiverAccount"
              value={formData.receiverAccount}
              onChange={handleChange}
              className="w-full bg-[#271A44] border border-gray-600 text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="enter account number (e.g., 1234567890)"
              maxLength="10"
              required
            />

            {/* owner */}
            {owner && (
              <p className="text-green-500 text-sm mt-1">
                Account Owner: {owner}
              </p>
            )}

            {/* Error Message  */}
            {error.receiverAccount && !owner && (
              <p className="text-red-500 text-sm mt-1">
                {error.receiverAccount}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full bg-[#271A44] border border-gray-600 text-gray-200 text-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount to transfer"
              min="0"
              step="0.01"
              required
            />
            {error.amount && (
              <p className="text-red-500 text-sm mt-1">{error.amount}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00D78A] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <CircleLoader size={20} color="#ffffff" />
            ) : (
              "Confirm Transfer"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
