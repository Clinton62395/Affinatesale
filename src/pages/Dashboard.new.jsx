import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { UserContext } from "../utils/userContext";
import {
  DollarSign,
  ArrowUpRight,
  Copy,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowLeftRight,
} from "lucide-react";
import { toast } from "react-toastify";
import { TransferForm } from "../utils/transfertForm";

export default function Dashboard() {
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [linkCopyStatus, setLinkCopyStatus] = useState("Copy Link");
  // const [isHover, setIsHover] = useState(true);

  const { user, isLoading, error, getUserDashboard } = useContext(UserContext);
  useEffect(() => {
    getUserDashboard();
  }, []);

  const handleTransferOpen = () => {
    setShowTransferForm(true);
  };

  const handleCopyAccountNumber = async () => {
    if (!user?.bankDetails?.accountNo) {
      toast.error("Account number not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(
        user.bankDetails.accountNo.toString()
      );
      setCopyStatus("Copied ✅");
      toast.success("Account number copied ✅");
      setTimeout(() => {
        setCopyStatus("Copy");
      }, 2000);
    } catch (err) {
      console.error("Error copying account number:", err);
      toast.error("Failed to copy account number");
    }
  };

  const handleCopyAffiliateLink = async () => {
    if (!user?.affiliateLink) {
      toast.error("Affiliate link not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(user.affiliateLink);
      setLinkCopyStatus("Link copied ✅");
      toast.success("Affiliate link copied ✅");
      setTimeout(() => {
        setLinkCopyStatus("Copy Link");
      }, 2000);
    } catch (err) {
      console.error("Error copying affiliate link:", err);
      toast.error("Failed to copy affiliate link");
      setLinkCopyStatus("❌ Error copying link");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <CircleLoader size={50} color="#2563eb" />
        <p className="mt-3 text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600">
          Error: {typeof error === "string" ? error : "Something went wrong"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!user || !user.firstName) {
    return <p className="text-center mt-10">No user found.</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <span className="text-[#170C32] font-bold text-xl tracking-tight">
                Learn and Earn
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>{user.currency}</option>
              </select>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">
                    {user.firstName}
                  </p>
                  <p className="text-xs text-gray-500">{user.rank}</p>
                </div>
                <div className="relative">
                  <img
                    src={user?.image || "/Portrait_Placeholder.png"}
                    className="w-10 h-10 rounded-full border-2 border-green-400 object-cover"
                    alt={`${user.firstName}'s profile`}
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          {/* Welcome section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#170C32] to-[#2C1B5A] rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
              <div className="px-6 py-8 sm:px-10 sm:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative">
                      <img
                        src={user?.image || "/Portrait_Placeholder.png"}
                        alt={`${user.firstName}'s profile`}
                        className="  h-12 w-12 md:h-20 md:w-20   rounded-full border-4 border-white/20 shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                        Active
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Welcome back, {user.firstName}!
                      </h2>
                      <p className="text-indigo-200 text-sm mb-4">
                        {user.email}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                          {user.country}
                        </span>
                        <div className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {user.rank}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="flex items-center gap-3">
                    {user.bankDetails?.accountNo && (
                      <div className="flex items-center gap-2 text-green-400 font-semibold">
                        <button
                          onClick={handleCopyAccountNumber}
                          className="flex items-center gap-2 hover:text-green-300 transition-colors"
                          aria-label="Copy account number"
                        >
                          <Copy className="w-4 h-4 cursor-pointer" />
                          <span>Bank Number: {user.bankDetails.accountNo}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Available Balance Card */}
            <div className="bg-gradient-to-r from-[#170C32] to-[#2C1B5A] rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">
                      Available Balance
                    </h4>
                    <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                      ${user.availableBalance?.toLocaleString() || "0"}
                    </p>
                    <p className="text-indigo-200 text-sm">Updated just now</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleTransferOpen}
                      aria-label="Transfer Funds"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/25"
                    >
                      <ArrowLeftRight className="w-4 h-4 mr-2" />
                      Transfer
                    </button>

                    <button
                      onClick={() =>
                        alert("Deposit function will be available soon!")
                      }
                      aria-label="Deposit Funds"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-sm font-semibold transition-all"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Earnings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Affiliate Earnings */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Affiliate Earnings
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-5 text-white shadow-lg shadow-green-500/20">
                    <p className="text-white/80 text-sm mb-1">Total Earnings</p>
                    <p className="text-3xl font-bold">
                      ${user.totalEarning?.toLocaleString() || "0"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-gray-600 text-sm mb-1">
                      Monthly Earnings
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      $
                      {user.totalEarning
                        ? (user.totalEarning / 12).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Affiliate Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Sub-Affiliate Stats
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl p-5 text-white shadow-lg shadow-blue-500/20">
                    <p className="text-white/80 text-sm mb-1">Total Payouts</p>
                    <p className="text-3xl font-bold">
                      ${user.payouts?.toLocaleString() || "0"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-gray-600 text-sm mb-1">
                      Total Referrals
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">
                        {user.totalRefferal?.toLocaleString() || "0"}
                      </p>
                      <span className="text-sm text-gray-500">
                        {user.totalRefferal === 1 ? "person" : "people"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Affiliate Link Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Your Affiliate Link
              </h4>
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-xl p-4">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      value={user.affiliateLink || ""}
                      readOnly
                      className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Affiliate link"
                    />
                    <button
                      onClick={handleCopyAffiliateLink}
                      className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                      aria-label="Copy affiliate link"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  {linkCopyStatus !== "Copy Link" && (
                    <p className="mt-2 text-sm text-green-500 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {linkCopyStatus}
                    </p>
                  )}
                </div>
                {/* <button
                  onClick={handleCopyAffiliateLink}
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </button> */}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Connect With Us
              </h4>
              <p className="text-gray-500 mb-6">
                Follow us on social media for updates and community insights
              </p>
              <div className="flex justify-center items-center gap-6">
                <a
                  href="#"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-pink-600 group-hover:text-pink-700" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-500" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Transfer Form Modal */}
      {showTransferForm && (
        <TransferForm onClose={() => setShowTransferForm(false)} />
      )}
    </div>
  );
}
