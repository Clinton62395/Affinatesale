import React from "react";
import { BadgeCheck, ChevronDown, ChevronUp, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarComponent from "../navbar/LandingNav";
import { Footer } from "../components/footer";
function Home() {
  const [openItems, setOpenItems] = React.useState({});

  const faqData = [
    {
      id: 1,
      question: "How soon can I start earning money?",
      answer:
        "You can start earning within the first week of implementing our strategies. Many students see their first commissions within 3-7 days of applying what they learn. However, consistent income typically develops over 2-4 weeks as you master the techniques.",
    },
    {
      id: 2,
      question: "Why is the price so affordable if the program offers so much?",
      answer:
        "We believe in making financial freedom accessible to everyone. Our affordable pricing allows us to help more people transform their lives. The value you receive far exceeds the investment - our students typically earn back their investment within the first month.",
    },
    {
      id: 3,
      question: "Is there any guarantee of success?",
      answer:
        "While we cannot guarantee individual results (as success depends on your effort and application), we provide all the tools, strategies, and support needed for success. Our track record shows that dedicated students who follow our system consistently achieve positive results.",
    },
    {
      id: 4,
      question: "What if I need help during the training?",
      answer:
        "You'll have access to our dedicated support team and community of successful affiliates. We provide live Q&A sessions, one-on-one mentoring opportunities, and a private Facebook group where you can get help anytime.",
    },
    {
      id: 5,
      question: "How do I know this is legitimate?",
      answer:
        "Our program has helped hundreds of students achieve success, as evidenced by our testimonials and case studies. We're transparent about our methods, provide real contact information, and offer ongoing support. You can also find reviews from our verified students.",
    },
    {
      id: 6,
      question: "Where will the training take place?",
      answer:
        "All training is conducted online through our secure learning platform. You can access the materials from anywhere in the world, at any time. We also conduct live webinars and virtual meetups for real-time interaction and support.",
    },
    {
      id: 7,
      question: "What makes this course different from others?",
      answer:
        "Our course focuses on proven, real-world strategies that are currently working. We provide step-by-step implementation guides, access to high-converting campaigns, and ongoing mentorship. Unlike other courses, we stay updated with the latest trends and algorithm changes.",
    },
    {
      id: 8,
      question:
        "After the registration fee, will I need to pay any additional fees for account upgrades or before withdrawals?",
      answer:
        "No hidden fees! The registration fee covers everything you need to get started. There are no additional charges for account upgrades, withdrawals, or accessing advanced materials. Everything is included in your one-time investment.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <NavbarComponent />
      <div
        className=" relative text-center bg-gradient-to-r from-[#170C32] via-[#0e012d] to-teal-800 pt-10 
                before:content-[''] before:absolute before:bg-[url('/background.png')] before:bg-center before:bg-no-repeat before:bg-cover before:inset-0 before:opacity-20 before:z-[-1]"
      >
        <p className="text-xs text-green-700 ">Tired of Financial Struggles?</p>
        <h1 className="text-white font-bold my-2 text-4xl ">
          Welcome to Affinetsales
        </h1>

        <p className="mt-2 text-[17px]  text-white ">
          Your Partner in Mastering Profitable Online Businesses and Building a
          Life of Freedom.
        </p>
        <small className="text-green-300">Real Value • Genuine Results</small>

        <div className="my-4">
          <Link
            to="/auth/sign-up"
            className="text-white bg-green-600 px-3 py-2  rounded-md hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex mb-5 text-white text-sm justify-center gap-10 items-center">
          {" "}
          <span className="flex gap-2">
            <BadgeCheck color="#70f966" />
            Zero Computer Skills Needed
          </span>
          <span className="flex gap-2">
            <BadgeCheck color="#70f966" />
            Works For Every One Ready To Learn
          </span>
          <span className="flex gap-2">
            <BadgeCheck color="#70f966" />
            You’ll Never Have To Beg For Money Again
          </span>
        </div>

        {/* Play icone container */}

        <div className="h-screen mt-10  max-w-6xl mx-auto bg-[#ddd]">
          <p className="flex gap-2 bg-green-400  justify-center items-center text-center  text-white">
            <Youtube color="black" />
            Discover more in the video below and enroll today!
          </p>
          <div className="flex justify-center items-center h-screen">
            <img src="logoPlay.png" alt="play-logo" className="h-24" />
          </div>
        </div>

        {/* grid container */}

        <div className="container text-center mt-5 max-w-6xl mx-auto px-4">
          {/* Enhanced header with gradient text and subtle animation */}
          <div className="mb-12">
            <h2 className="text-white font-bold text-4xl md:text-5xl mx-auto md:mx-24 mb-4 leading-tight">
              People are achieving{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                big success
              </span>{" "}
              every day with our secret guide on{" "}
              <span className="text-blue-400 font-extrabold">AFFINETSALES</span>
            </h2>
            <p className="text-gray-300 text-lg font-medium">
              Discover it Yourself…
            </p>

            {/* Decorative element */}
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {/* Coach Favour */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="relative mb-4">
                <img
                  src="coachFavour.png"
                  alt="Coach Favour"
                  className="h-48 w-full object-cover rounded-lg"
                />
                {/* Success badge */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ✓ SUCCESS
                </div>
              </div>

              <h5 className="font-bold text-xl text-gray-800 mb-3">
                Coach Favour
              </h5>
              <div className="flex justify-center mb-3">
                {/* Star rating */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                I had the privilege of meeting Brains TV three years ago, and it
                was a{" "}
                <span className="font-semibold text-blue-600">
                  turning point
                </span>{" "}
                in my life. Through his guidance, I acquired valuable skills and
                discovered affiliate marketing. His mentorship has been
                instrumental in my success.
              </p>

              {/* Quote decoration */}
              <div className="text-blue-400 text-4xl font-bold mt-4 opacity-20">
                "
              </div>
            </div>

            {/* Ogbeide Oluwatobi */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="relative mb-4">
                <img
                  src="coachJannifa.png"
                  alt="Ogbeide Oluwatobi"
                  className="h-48 w-full object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  MILLIONAIRE
                </div>
              </div>

              <h5 className="font-bold text-xl text-gray-800 mb-3">
                Ogbeide Oluwatobi Masebinu
              </h5>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-purple-600">
                  "I Made My First Million at 22!"
                </span>
                My passion for making money led me to explore countless
                opportunities, but Affiliate Marketing truly stood out. The most
                rewarding part is teaching hundreds of students the same method.
              </p>

              <div className="text-purple-400 text-4xl font-bold mt-4 opacity-20">
                "
              </div>
            </div>

            {/* Coach Jennifer */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="relative mb-4">
                <img
                  src="mocebinu.png"
                  alt="Coach Jennifer"
                  className="h-48 w-full object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  30K EARNER
                </div>
              </div>

              <h5 className="font-bold text-xl text-gray-800 mb-3">
                Coach JENNIFER
              </h5>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                I've always wanted to make money online but was scared of
                getting scammed until I met Brains TV. I made my{" "}
                <span className="font-semibold text-green-600">
                  first 30k within a few days
                </span>{" "}
                of working with him, and I've never regretted it since.
              </p>

              <div className="text-green-400 text-4xl font-bold mt-4 opacity-20">
                "
              </div>
            </div>

            {/* Coach Bill Clinton */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="relative mb-4">
                <img
                  src="clinton.jpg"
                  alt="Coach Bill Clinton"
                  className="h-48 w-full object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  TECH EXPERT
                </div>
              </div>

              <h5 className="font-bold text-xl text-gray-800 mb-3">
                Coach Bill Clinton
              </h5>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Passionate about digital technology and financial independence.
                Dedicated to IT, web development, graphic design, and
                cryptocurrencies. My goal is to create a{" "}
                <span className="font-semibold text-blue-600">
                  modern training center
                </span>{" "}
                that will positively impact my community.
              </p>

              <div className="text-blue-400 text-4xl font-bold mt-4 opacity-20">
                "
              </div>
            </div>
          </div>

          {/* Call-to-action section */}
          <div className="mt-16 text-center mb-5">
            <p className="text-white text-xl mb-6">
              Ready to join these success stories?
            </p>
            <Link
              to="/auth/sign-up"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        {/* single container with image */}

        <div className="container max-w-3xl bg-white mx-auto overflow-hidden sm:p-0 sm:block rounded-lg md:p-3 md:flex justify-center items-center  md:h-72">
          <div className="w-full mx-auto h-full md:w-1/3">
            <img
              src="challeng.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-3 md:mx-10  w-full md:w-1/2 ">
            <h5 className="font-bold text-2xl p-5">
              500K Money Challenge in 30 Days
            </h5>
            <p className="text-sm font-semibold  text-start ">
              Ready to make your first 500K? This comprehensive course dives
              deep into the world of affiliate marketing, revealing the
              strategies and secrets that can help you consistently earn up to
              500K every month. Whether you're a beginner or have some
              experience, this challenge equips you with actionable steps and
              insider tips to transform your affiliate marketing journey on
              Affinetsales.
            </p>
          </div>
        </div>

        {/* second section */}

        <div className=" container sm:block max-w-3xl bg-white mx-auto overflow-hidden rounded-lg   md:h-72 md:flex justify-center items-center my-5 ">
          <div className="w-full md:w-1/2 p-5">
            <h5 className="font-bold text-2xl py-3 mt-5 text-start">
              How to Start a Profitable <br /> WhatsApp TV Business{" "}
            </h5>
            <p className="text-sm font-semibold text-start  pb-[14px]">
              Ever wondered how to build a large, engaged audience on WhatsApp?
              This course unveils the powerful secrets behind growing your
              WhatsApp TV from scratch to over 5,000 active viewers. Learn the
              exact strategies that the pros won't tell you, and discover how to
              monetize your audience for maximum profit. This method is tried,
              tested, and proven to work!
            </p>
          </div>
          <div className="w-full h-full md:w-1/3 mx-auto md:mx-10  mt-5 ">
            <img
              src="whasapp_logo.png"
              alt="logo-whasapp"
              className="h-full w-full  object-cover "
            />
          </div>
        </div>

        {/* third section  */}

        <div className="container max-w-3xl bg-white mx-auto rounded-lg overflow-hidden   md:flex justify-center items-center md:h-72 my-5">
          <div className="w-full md:w-1/3 h-full mt-5 ">
            <img
              src="instagram.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 ">
            <h5 className="font-bold text-2xl p-5">
              Instagram Ads <br />
              (Crazy Secret Exposed)
            </h5>
            <p className="text-sm font-semibold text-start">
              Ready to make your first 500K? This comprehensive course dives
              deep into the world of affiliate marketing, revealing the
              strategies and secrets that can help you consistently earn up to
              500K every month. Whether you're a beginner or have some
              experience, this challenge equips you with actionable steps and
              insider tips to transform your affiliate marketing journey on
              Affinetsales.
            </p>
          </div>
        </div>

        {/* section 4 */}
        <div className=" container sm:block max-w-3xl bg-white mx-auto overflow-hidden rounded-lg   md:h-72 md:flex justify-center items-center my-5 ">
          <div className="w-full md:w-1/2 p-5">
            <h5 className="font-bold text-2xl py-3 mt-5 text-start">
              Facebook Ads Workshop{" "}
            </h5>
            <p className="text-sm font-semibold text-start  pb-[14px]">
              Facebook remains one of the most powerful advertising platforms in
              the world. This workshop takes you through every step of creating,
              optimizing, and scaling profitable Facebook ad campaigns. You'll
              learn how to reach your target audience, craft irresistible ads,
              and turn clicks into conversions. Whether you're new to Facebook
              ads or looking to improve your results, this course has you
              covered.
            </p>
          </div>
          <div className="w-full h-full md:w-1/3 mx-auto md:mx-10  mt-5 ">
            <img
              src="workflow.png"
              alt="logo-whasapp"
              className="h-full w-full  object-cover "
            />
          </div>
        </div>

        {/* section 5 */}

        <div className="container max-w-3xl bg-white mx-auto rounded-lg overflow-hidden   md:flex justify-center items-center md:h-72 my-5">
          <div className="w-full md:w-1/3 h-full mt-5 ">
            <img
              src="robo.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 ">
            <h5 className="font-bold text-2xl p-5">WhatsApp Automation</h5>
            <p className="text-sm font-semibold text-start">
              Automation is key to scaling your business, and this course shows
              you how to leverage WhatsApp automation to streamline your
              operations. Learn how to set up automated responses, schedule
              messages, and manage your contacts efficiently. This course is
              perfect for anyone looking to save time and increase productivity
              while still providing excellent customer service
            </p>
          </div>
        </div>

        {/* section 6 */}

        <div className=" container sm:block max-w-3xl bg-white mx-auto overflow-hidden rounded-lg   md:h-72 md:flex justify-center items-center my-5 ">
          <div className="w-full md:w-1/2 p-5">
            <h5 className="font-bold text-2xl py-3 mt-5 text-start">
              Email Marketing{" "}
            </h5>
            <p className="text-sm font-semibold text-start  pb-[14px]">
              Email marketing is still one of the most effective ways to reach
              your audience. This course teaches you how to build a profitable
              email list, craft compelling emails, and create automated
              campaigns that convert. Whether you're promoting products,
              services, or content, this course will help you master the art of
              email marketing.
            </p>
          </div>
          <div className="w-full h-full md:w-1/3 mx-auto md:mx-10  mt-5 ">
            <img
              src="letter.png"
              alt="logo-letter"
              className="h-full w-full  object-cover "
            />
          </div>
        </div>

        {/* section 7 */}

        <div className="container h-full max-w-3xl bg-white mx-auto overflow-hidden sm:p-0 sm:block rounded-lg md:p-3 md:flex justify-center items-center  md:h-72 my-5">
          <div className="w-full h-full md:w-1/3 mx-auto md:mx-10  mt-5 ">
            <img
              src="organic.png"
              alt="organic"
              className=" w-full object-cover"
            />
          </div>
          <div className="p-2  w-full md:w-1/2 ">
            <h5 className="font-bold text-2xl p-2">
              Organic Lead Generation for Physical and Online Business
            </h5>
            <p className="text-sm font-semibold  text-start p-3 ">
              Lead generation is the lifeblood of any business, and this course
              teaches you how to attract and convert leads without spending a
              dime on ads. Learn proven strategies for generating organic
              traffic, building relationships, and nurturing leads until they're
              ready to buy. This course is ideal for entrepreneurs looking to
              grow their business sustainably.
            </p>
          </div>
        </div>

        {/* section 8 */}

        <div className="container max-w-3xl bg-white mx-auto overflow-hidden sm:p-0 sm:block rounded-lg md:p-3 md:flex justify-center items-center  md:h-72">
          <div className="px-3 md:mx-10  w-full md:w-1/2 ">
            <h5 className="font-bold text-2xl p-5">
              How to Create a Professional Landing Page{" "}
            </h5>
            <p className="text-sm font-semibold  text-start ">
              A well-designed landing page can make or break your marketing
              campaign. This course shows you how to create landing pages that
              capture attention, build trust, and drive conversions. Learn the
              key elements of high-converting landing pages and how to test and
              optimize them for maximum results.
            </p>
          </div>

          <div className="w-full mx-auto h-full md:w-1/3">
            <img
              src="landing_page.png"
              alt="landing-page"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* section 9 */}
        <div className=" container sm:block max-w-3xl bg-white mx-auto overflow-hidden rounded-lg   md:h-72 md:flex justify-center items-center my-5 ">
          <div className="w-full md:w-1/2 p-5">
            <h5 className="font-bold text-2xl py-3 mt-5 text-start">
              Urgent 2K Master-class{" "}
            </h5>
            <p className="text-sm font-semibold text-start  pb-[14px]">
              Need to make some quick cash? The Urgent 2K Master-class is
              designed for anyone who needs to generate money fast. This course
              reveals strategic ways to sell valuable updates, including hacked
              apps and other digital products, to people willing to pay that
              urgent 2K. It's perfect for those who need urgent 2k to fix data
              or save up for Ads.
            </p>
          </div>
          <div className="w-full h-full md:w-1/3 mx-auto md:mx-10  mt-5 ">
            <img
              src="workflow.png"
              alt="workflow"
              className="h-full w-full  object-cover "
            />
          </div>
        </div>

        {/* footer container */}

        <div className="text-start container max-w-4xl my-12 mx-auto px-4">
          {/* Enhanced header */}
          <div className="text-center mb-12">
            <h3 className="font-bold text-4xl md:text-5xl text-green-500 py-3 mb-4">
              FREQUENTLY ASKED
              <span className="block text-green-400">QUESTIONS</span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-green-500/50"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center p-6 cursor-pointer group"
                  onClick={() => toggleItem(item.id)}
                >
                  <h4 className="text-white font-semibold text-lg md:text-xl pr-4 group-hover:text-green-400 transition-colors duration-200">
                    {item.question}
                  </h4>
                  <div className="flex-shrink-0 text-green-400 transition-transform duration-300">
                    {openItems[item.id] ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItems[item.id]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/30">
            <Link
              to="/auth/sign-up"
              className="font-bold text-3xl text-white mb-4"
            >
              Are you ready to get started now?
            </Link>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of successful students and start your journey today!
            </p>

            <Link
              to="/auth/sign-up"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Sign Up Now →
            </Link>

            {/* Trust indicators */}
            <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                No Hidden Fees
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Instant Access
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
