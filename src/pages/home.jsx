import { BadgeCheck, ChevronDown, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../navbar/LandingNav";
import { Footer } from "../components/footer";
function Home() {
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
            to="/sign-up"
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

        <div className="container text-center mt-5 max-w-6xl max-auto ">
          <h2 className="text-white font-bold text-4xl md:text-5xl mx-auto md:mx-24 ">
            People are achieving big success every day with our secret guide on
            AFFINETSALES{" "}
          </h2>
          <p className="my-3">Discovered it Yourself…</p>
          <div className="grid grid-cols-1  md:grid-cols-4 gap-4 mx-auto md:mx-10 ">
            <div className="col-span-1 rounded-md px-2 py-3 mx-auto text-center bg-[#ddd]">
              <img
                src="coachFavour.png"
                alt="image"
                className="md:h-52 w-full "
              />
              <h5 className="font-bold my-5">Coach Favour</h5>
              <p className="text-sm font-semibold p-3 break-words">
                I had the privilege of meeting Brains TV three (3) years ago,
                and it was a turning point in my life. Through his guidance, I
                acquired a range of valuable skills and discovered the world of
                affiliate marketing. I also started earning a steady income
                alongside him. His mentorship and expertise in affiliate
                marketing have been instrumental.
              </p>
            </div>
            <div className="col-span-1 rounded-md px-2 text-center bg-[#ddd]">
              <img
                src="coachJannifa.png"
                alt="image"
                className="h-52 mx-auto my-3"
              />

              <h5 className="font-bold">Ogbeide Oluwatobi Masebinu</h5>
              <p className=" text-sm font-semibold p-3 break-words">
                "I Made My First Million at 22! My passion for making money has
                driven me to become a jack of many trades. I've explored
                countless ways to earn both online and offline, but Affiliate
                Marketing truly stood out. The most rewarding part isn’t just
                the money I’ve made—it's the fact that I've been able to teach
                hundreds of students the same method, empowering them to achieve
                their financial goals too.
              </p>
            </div>
            <div className="col-span-1 rounded-md px-2 py-3 text-center bg-[#ddd]">
              <img
                src="mocebinu.png"
                alt="image"
                className="md:h-52 w-full  mb-3"
              />

              <h5 className="font-bold">Coach JENNIFER</h5>
              <p className="text-sm font-semibold p-3 break-words">
                I've always wanted to make money online but was scared of
                getting scammed until I met Brains TV. At first, I had my
                doubts, but he proved them wrong. I made my first 30k within a
                few days of working with him, and I've never regretted working
                with him since then.
              </p>
            </div>
            <div className="col-span-1 rounded-md px-2 py-3 text-center bg-[#ddd]">
              <img
                src="clinton.jpg"
                alt="image"
                className="md:h-52 w-full rounded-xl mb-2"
              />

              <h5 className="font-bold">Coach Bill Clinton</h5>
              <p className="text-sm font-semibold p-3 break-words">
                Passionate about digital technology and financial independence,
                I am dedicated to IT, particularly web development, graphic
                design, cybersecurity, and video editing. I am also fascinated
                by the world of cryptocurrencies and trading. My goal is to
                acquire strong skills to create a modern training center that
                will positively impact my community.
              </p>
            </div>
          </div>
        </div>

        {/* contente above the grid */}

        <div className="text-white max-w-4xl mx-auto my-5">
          <h2 className="font-bold text-3xl md:text-[50px] leading-tight">
            Why <span className="text-green-700">Affinetsales</span> is the
            <br /> Right Choice for You
          </h2>
          <p className="text-white text-start md:text-center text-medium p-5 break-words">
            In a world where the cost of living keeps rising, it can feel
            impossible to stay ahead. But with Affinetsales, you can turn this
            challenge into an opportunity. We’re here to help you not only keep
            up but excel. At Affinetsales, we believe that financial
            independence is within everyone's reach. Our platform is designed to
            provide you with the skills and strategies needed to generate
            significant income online. From learning digital skills to reaching
            out to customers who are ready to pay well, and even mastering the
            secrets of closing sales as an affiliate marketer—we cover it all.
            Unlock Your Potential Join a Community of Success-Driven Individuals
            Learn, Earn, and Grow with Affinetsales
          </p>

          <h2 className="my-4 text-white font-bold text-4xl leading-tight">
            We've compiled a range of businesses <br /> you can start today with
            <span className="text-green-700"> complete guidance</span>.
          </h2>
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

        <div className="text-start container max-w-2xl my-3 mx-auto">
          <h3 className="text-center font-bold text-4xl text-green-600 py-3">
            FREQUENTLY ASKED QUESTIONS{" "}
          </h3>
          <div className=" flex justify-between  text-white font-semibold  text-xl mb-5">
            How soon can I start earning money?
            <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            Why is the price so affordable if the program offers so much?{" "}
            <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            Is there any guarantee of success? <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            What if I need help during the training? <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            How do I know this is legitimate? <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            Where will the training take place? <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            What makes this course different from others? <ChevronDown />
          </div>
          <div className="flex justify-between  text-white font-semibold  text-xl mb-5">
            After the registration fee, will I need to pay any additional fees
            for account upgrades or before withdrawals? <ChevronDown />
          </div>

          <h3 className="text-center font-semibold text-2xl text-white py-3">
            Are you ready to get started now?{" "}
          </h3>
          <div className="text-center my-3">
            <Link
              to="/SignUp"
              className="text-white bg-green-500 px-5 py-2 mx-auto rounded-xl hover:bg-green-600 transition-300 transition-colors-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
