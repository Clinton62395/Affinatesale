import { Globe, Star } from "lucide-react";
import React from "react";
import { Footer } from "../components/footer";

export const ClasscroomCourse = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
        <img
          src="/clinton.jpg"
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

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b bg-white">
        <button className="px-6 py-3 font-medium border-b-2 border-black text-black">
          About
        </button>
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
          Course Content
        </button>
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
          Review
        </button>
      </div>

      {/* About Content */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Course Description:
        </h3>
        <p className="text-gray-700 leading-relaxed text-base">
          In this comprehensive course, you will dive deep into the world of
          WhatsApp TV, learning everything from the basics to advanced
          strategies. WhatsApp TV has emerged as a powerful platform for content
          creators, entrepreneurs, and influencers to engage with their
          audience, build a community, and even monetize their content. Whether
          you're looking to start your own WhatsApp TV channel or enhance your
          existing one.
        </p>
      </div>
      <Footer />
    </div>
  );
};

// classroo content component

export const ClassroomContent = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
        <div className="w-10 h-10 rounded-full bg-orange-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-bold">
            <img
              src="/clinton.jpg"
              className="h-24 w-24 rounded-full "
              alt="clinton"
            />
          </div>
        </div>
      </div>

      {/* Course Hero Section */}
      <div className="bg-[#170C32] p-6 text-white">
        <div className="flex items-center gap-6">
          {/* Course Image */}
          <div className="flex-shrink-0">
            <div className="w-52 h-52 bg-white rounded-lg p-3 relative">
              {/* TV Image representation */}
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-md relative overflow-hidden">
                <img
                  src="/whasapp_logo.png"
                  alt="whatsapp logo "
                  className="w-full h-full"
                />
                {/* Lightning effect */}
              </div>
              {/* Course title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-xs p-2 text-center rounded-b-md">
                <div className="font-semibold leading-tight">
                  How to Start a Profitable WhatsApp TV Business
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 leading-tight">
              How to Start a Profitable WhatsApp TV Business
            </h2>
            <p className="text-purple-200 mb-4">Social Media</p>

            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-400 gap-2 items-center flex text-white px-2 py-1 rounded text-sm font-bold">
                <Star size={14} />
                4.7
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

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b bg-white">
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
          About
        </button>
        <button className="px-6 py-3 font-medium border-b-2 border-black text-black">
          Course Content
        </button>
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
          Review
        </button>
      </div>

      {/* Course Content */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">
          Course Content:
        </h3>
        <ol className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              1.
            </span>
            <span>Introduction to WhatsApp TV</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              2.
            </span>
            <span>Channel Identity and Branding</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              3.
            </span>
            <span>Content Creation Strategies</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              4.
            </span>
            <span>Audience Growth Tactics</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              5.
            </span>
            <span>Monetization Techniques</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              6.
            </span>
            <span>Advanced Optimization Tips</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              7.
            </span>
            <span>Hidden Features and Hacks</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              8.
            </span>
            <span>Risk Management and Troubleshooting</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              9.
            </span>
            <span>Case Studies and Success Stories</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium text-gray-900 mr-3 flex-shrink-0">
              10.
            </span>
            <span>Future Trends and Adaptation</span>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

// whasapp video player component
export const WhatsAppVideo = () => {
  const [currentVideo, setCurrentVideo] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

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
        <h1 className="text-lg font-medium text-gray-900">Learn and Earn</h1>
        <div className="w-8 h-8 rounded-full bg-orange-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
            <img
              src="/clinton.jpg"
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
                ⚡
              </div>
              <div className="absolute bottom-12 right-16 text-yellow-300 text-xs opacity-60">
                ⚡
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
                    ⚙️
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
      <Footer />
    </div>
  );
};

// classroom Review component

export const ClassroomReview = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-900">Learn and Earn</h1>
        <div className="w-10 h-10 rounded-full bg-orange-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-bold">
            <img
              src="/clinton.jpg"
              className="h-24 w-24 rounded-full "
              alt="clinton"
            />
          </div>
        </div>
      </div>

      {/* Course Hero Section */}
      <div className="bg-[#170C32] p-6 text-white">
        <div className="flex items-center gap-6">
          {/* Course Image */}
          <div className="flex-shrink-0">
            <div className="w-52 h-52 bg-white rounded-lg p-3 relative">
              {/* TV Image representation */}
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-md relative overflow-hidden">
                <img
                  src="/whasapp_logo.png"
                  alt="whatsapp logo "
                  className="w-full h-full"
                />
                {/* Lightning effect */}
              </div>
              {/* Course title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-xs p-2 text-center rounded-b-md">
                <div className="font-semibold leading-tight">
                  How to Start a Profitable WhatsApp TV Business
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 leading-tight">
              How to Start a Profitable WhatsApp TV Business
            </h2>
            <p className="text-purple-200 mb-4">Social Media</p>

            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-400 gap-2 items-center flex text-white px-2 py-1 rounded text-sm font-bold">
                <Star size={14} />
                4.7
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

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b bg-white">
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors">
          About
        </button>
        <button className="px-6 py-3 font-medium text-black">
          Course Content
        </button>
        <button className="px-6 py-3  border-b-4  border-black font-medium text-gray-600 hover:text-gray-800 transition-colors">
          Review
        </button>
      </div>

      {/* Review grid above Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-white py-10">
        <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>

         <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>


         <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>

         <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>

         <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>

         <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src="/clinton.jpg"
              alt="clinton-photo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">Clinton</h3>
          </div>
          <div>
            <p className="text-[#7E7EAA] text-[10px] leading-4">
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
            <span className="flex gap-2 mt-2">
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
              </span>
              <span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
