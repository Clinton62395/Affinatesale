import {
  ArrowLeft,
  Globe,
  Settings,
  SmartphoneCharging,
  Star,
} from "lucide-react";
import { useState, useContext } from "react";
import React from "react";
import { ContentClassroom } from "../components/ContentClassroom";
import { ReviewClassroom } from "../components/ReviewClassroom";
import { AboutClassroom } from "../components/AboutClassroom";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/userContext";

export const ClasscroomAbout = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { user } = useContext(UserContext);
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
        <img
          src={user?.image || "/Portrait_Placeholder.png"}
          className="w-14 h-14 rounded-full"
          alt="photo"
        />
      </div>

      {/* Course Hero Section */}
      <div className="bg-[#170C32] p-6 text-white">
        <div className="flex items-center gap-6">
          {/* Course Image */}
          <div className="flex-shrink-0">
            <div className="w-52 h-22 bg-white rounded-lg p-3 ">
              {/* TV Image representation */}
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-md relative overflow-hidden">
                {/* TV screen effect */}
                <img
                  src="/whasapp_logo.png"
                  className="w-full h-full"
                  alt="logo-whatsapp"
                />
                {/* Lightning effect */}
              </div>
              {/* Course title overlay */}
            </div>
          </div>

          {/* Course Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 leading-tight">
              How to Start a Profitable WhatsApp TV Business
            </h2>
            <p className="text-purple-200 mb-4">Social Media</p>

            <div className="flex items-center gap-2 mb-3">
              <span className=" flex gap-2 items-center bg-yellow-400 text-white px-2 py-1 rounded text-sm font-bold">
                <Star size={14} /> 4.7
              </span>
            </div>

            <p className="text-sm text-purple-200 mb-3">1220 students</p>

            <div className="flex items-center gap-4 text-sm text-purple-200 mb-4">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 flex items-center justify-center">
                  <Globe />
                </span>
                <span>English</span>
              </div>
              <span>Intermediate</span>
            </div>

            <p className="text-xs text-purple-300 mb-4">
              Last Updated 10/02/2025
            </p>

            <Link
              to="/dashboard/classroom/video"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b bg-white">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-6 py-3 font-medium ${
            activeTab === "about"
              ? "border-b-4 border-black font-extrabold"
              : "border-0"
          }  text-black`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`px-6 py-3 font-medium ${
            activeTab === "content"
              ? "border-b-4 border-black font-extrabold"
              : "border-0"
          }  text-black`}
        >
          Course Content
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-6 py-3 font-medium ${
            activeTab === "review"
              ? "border-b-4 border-black font-extrabold"
              : "border-0"
          }  text-black`}
        >
          Review
        </button>
      </div>
      <div>
        {activeTab === "about" && <AboutClassroom />}
        {activeTab === "content" && <ContentClassroom />}
        {activeTab === "review" && <ReviewClassroom />}
      </div>
    </div>
  );
};

// classroo content component

// export const ClassroomContent = () => {
//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-white border-b">
//         <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
//         <div className="w-10 h-10 rounded-full bg-orange-400 overflow-hidden">
//           <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-bold">
//             <img
//               src="/clinton.jpg"
//               className="h-24 w-24 rounded-full "
//               alt="clinton"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Course Hero Section */}
//       <div className="bg-[#170C32] p-6 text-white">
//         <div className="flex items-center gap-6">
//           {/* Course Image */}
//           <div className="flex-shrink-0">
//             <div className="w-52 h-52 bg-white rounded-lg p-3 relative">
//               {/* TV Image representation */}
//               <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-md relative overflow-hidden">
//                 <img
//                   src="/whasapp_logo.png"
//                   alt="whatsapp logo "
//                   className="w-full h-full"
//                 />
//                 {/* Lightning effect */}
//               </div>
//               {/* Course title overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-xs p-2 text-center rounded-b-md">
//                 <div className="font-semibold leading-tight">
//                   How to Start a Profitable WhatsApp TV Business
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course Details */}
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-2 leading-tight">
//               How to Start a Profitable WhatsApp TV Business
//             </h2>
//             <p className="text-purple-200 mb-4">Social Media</p>

//             <div className="flex items-center gap-2 mb-3">
//               <span className="bg-yellow-400 gap-2 items-center flex text-white px-2 py-1 rounded text-sm font-bold">
//                 <Star size={14} />
//                 4.7
//               </span>
//             </div>

//             <p className="text-sm text-purple-200 mb-3">1220 students</p>

//             <div className="flex items-center gap-4 text-sm text-purple-200 mb-4">
//               <div className="flex items-center gap-1">
//                 <span className="w-4 h-4 flex items-center justify-center">
//                   <Globe />
//                 </span>
//                 <span>English</span>
//               </div>
//               <span>Intermediate</span>
//             </div>

//             <p className="text-xs text-purple-300 mb-4">
//               Last Updated 10/02/2025
//             </p>

//             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200">
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="flex border-b bg-white">
//         <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
//           About
//         </button>
//         <button className="px-6 py-3 font-medium border-b-2 border-black text-black">
//           Course Content
//         </button>
//         <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
//           Review
//         </button>
//       </div>

//       {/* Course Content */}

//       <Footer />
//     </div>
//   );
// };

// classroom Review component
// export const ClassroomReview = () => {
//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-white border-b">
//         <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
//         <div className="w-10 h-10 rounded-full bg-orange-400 overflow-hidden">
//           <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-bold">
//             <img
//               src="/clinton.jpg"
//               className="h-24 w-24 rounded-full "
//               alt="clinton"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Course Hero Section */}
//       <div className="bg-[#170C32] p-6 text-white">
//         <div className="flex items-center gap-6">
//           {/* Course Image */}
//           <div className="flex-shrink-0">
//             <div className="w-52 h-52 bg-white rounded-lg p-3 relative">
//               {/* TV Image representation */}
//               <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-md relative overflow-hidden">
//                 <img
//                   src="/whasapp_logo.png"
//                   alt="whatsapp logo "
//                   className="w-full h-full"
//                 />
//                 {/* Lightning effect */}
//               </div>
//               {/* Course title overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-xs p-2 text-center rounded-b-md">
//                 <div className="font-semibold leading-tight">
//                   How to Start a Profitable WhatsApp TV Business
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course Details */}
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-2 leading-tight">
//               How to Start a Profitable WhatsApp TV Business
//             </h2>
//             <p className="text-purple-200 mb-4">Social Media</p>

//             <div className="flex items-center gap-2 mb-3">
//               <span className="bg-yellow-400 gap-2 items-center flex text-white px-2 py-1 rounded text-sm font-bold">
//                 <Star size={14} />
//                 4.7
//               </span>
//             </div>

//             <p className="text-sm text-purple-200 mb-3">1220 students</p>

//             <div className="flex items-center gap-4 text-sm text-purple-200 mb-4">
//               <div className="flex items-center gap-1">
//                 <span className="w-4 h-4 flex items-center justify-center">
//                   <Globe />
//                 </span>
//                 <span>English</span>
//               </div>
//               <span>Intermediate</span>
//             </div>

//             <p className="text-xs text-purple-300 mb-4">
//               Last Updated 10/02/2025
//             </p>

//             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200">
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="flex border-b bg-white">
//         <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
//           About
//         </button>
//         <button className="px-6 py-3 font-medium text-black">
//           Course Content
//         </button>
//         <button className="px-6 py-3  border-b-4  border-black font-medium text-gray-600 hover:text-gray-800 transition-colors">
//           Review
//         </button>
//       </div>

//       {/* Review grid above Content */}

//       <Footer />
//     </div>
//   );
// };

// whasapp video player component
export const ClasscroomVideo = () => {
  const [currentVideo, setCurrentVideo] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { user } = useContext(UserContext);

  const videoLessons = [
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
    { title: "Introduction", duration: "00:07:06" },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Link
          to="/dashboard/classroom/info"
          className="text-lg font-medium text-gray-900 flex gap-2 items-center"
        >
          <ArrowLeft
            size={24}
            className="text-black font-extrabold transform hover:-translate-x-2 transition-all duration-300 hover:text-blue-500 "
          />
          Learn and Earn
        </Link>
        <div className="w-8 h-8 rounded-full bg-orange-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
            <img
              src={user.image || "/Portrait_Placeholder.png"}
              alt="photo"
              className="h-24 w-24 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Video Player */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-4 mb-4">
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
            {/* Video Content - TV with WhatsApp */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
              {/* TV Image */}
              <div className="relative w-3/4 h-3/4">
                {/* TV Frame */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg relative shadow-2xl">
                  {/* TV Screen */}
                  <div className="absolute inset-4 bg-gradient-to-br from-green-400 to-green-600 rounded-md overflow-hidden">
                    {/* Screen glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-700">
                      {/* WhatsApp Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-16 h-16 fill-green-500"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687" />
                          </svg>
                        </div>
                      </div>
                      {/* Screen reflections */}
                      <div className="absolute top-2 left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full blur-sm"></div>
                      <div className="absolute top-4 right-6 w-6 h-6 bg-white bg-opacity-10 rounded-full blur-sm"></div>
                    </div>
                  </div>
                  {/* TV Controls */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  {/* TV Stand */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-b-lg"></div>
                </div>
              </div>

              {/* Lightning effects */}
              <div className="absolute top-8 left-12 text-yellow-300 text-sm opacity-80">
                <SmartphoneCharging />
              </div>
              <div className="absolute bottom-12 right-16 text-yellow-300 text-xs opacity-60">
                <SmartphoneCharging />
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-3 text-white">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors"
                >
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-white"></div>
                      <div className="w-1 h-4 bg-white"></div>
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                  )}
                </button>

                {/* Progress Bar */}
                <div className="flex-1 h-1 bg-white/30 rounded-full relative cursor-pointer">
                  <div className="w-0 h-full bg-white rounded-full"></div>
                </div>

                {/* Video Controls Icons */}
                <div className="flex items-center gap-2">
                  {/* Subtitles */}
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded text-xs">
                    CC
                  </button>
                  {/* Settings */}
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded">
                    <Settings />
                  </button>
                  {/* Fullscreen */}
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded">
                    <div className="w-3 h-3 border border-white"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Playlist */}
        <div className="space-y-2">
          {videoLessons.map((lesson, index) => (
            <div
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                index === currentVideo
                  ? "bg-purple-900 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Play Button */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentVideo ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                <div
                  className={`w-0 h-0 border-l-3 border-y-2 border-y-transparent ml-0.5 ${
                    index === currentVideo
                      ? "border-l-white"
                      : "border-l-gray-600"
                  }`}
                ></div>
              </div>

              {/* Lesson Info */}
              <div className="flex-1">
                <h3
                  className={`font-medium ${
                    index === currentVideo ? "text-white" : "text-gray-900"
                  }`}
                >
                  {lesson.title}
                </h3>
              </div>

              {/* Duration */}
              <span
                className={`text-sm ${
                  index === currentVideo ? "text-white/80" : "text-gray-500"
                }`}
              >
                {lesson.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
