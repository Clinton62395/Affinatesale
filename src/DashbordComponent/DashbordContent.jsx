import { useState } from "react";
import { Footer } from "../components/footer";
import { Menu, X } from "lucide-react";
import { Link, Links } from "react-router-dom";




export const Classroom = () => {
  return (
    <>
      <div className="relative flex min-h-screen px-2 ">
        <div className=" mx-2 md:mx-10 h-screen flex-1 flex flex-col py-3 bg-white/90">
          {/* <button onClick={toggleSidebar} className="bg-white  ">
            {" "}
            {isOpen ? <X /> : <Menu size={24} className="text-black" />}
          </button> */}
          <div className="flex justify-between items-center px-4 ">
            <div>
              <h5>Learn and Earn</h5>
            </div>
            <div className="flex gap-x-3">
              <select>
                <option value="USD">USD</option>
                <option value="N">Naira</option>
                <option value="GN">GNF</option>
                <option value="E">Euro</option>
              </select>
              <img
                src="/clinton.jpg"
                alt="photo"
                className="h-8 w-8 rounded-full border-2 border-black "
              />
            </div>
          </div>

          {/* input search */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 mt-5 mx-auto max-w-5xl px-4">
            <input
              type="search"
              placeholder="type keyword"
              name="search"
              className="border-black/10 border-2 p-2 w-full max-w-xs flex-1 min-w-0"
            />

            <select className="border-2 px-5 min-w-0">
              <option value="USD" className="px-2 py-4  ">
                Select One
              </option>
            </select>

            <button
              type="button"
              className="rounded-md px-6 md:px-8 outline-0 bg-green-400 hover:bg-green-500 transition-all duration-200 text-white"
            >
              Search
            </button>
          </div>

          {/* image display in grid */}
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 md:my-10 gap-2 md:gap-5">
              <div className="border min-w-0">
                <Link to="/dashboard/classroom/info">
                  <div className="flex justify-center">
                    <img
                      src="/tree.png"
                      alt="image"
                      className="object-cover h-full md:h-32 w-full md:max-w-full"
                    />
                  </div>
                </Link>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    Introduction to Affinatesales
                  </h2>
                  <p className="text-sm">English Intermediate Level</p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <Link to="/dashboard/classroom/content">
                  <div className="flex justify-center">
                    <img
                      src="/challeng.png"
                      alt="image"
                      className="object-cover h-full md:h-32 w-full"
                    />
                  </div>
                </Link>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    500K Money Challenge in 30 days
                  </h2>
                  <p className="text-sm break-words">
                    Indepth Affiliate Marketing Programme for Affinatesales
                  </p>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <Link to="/dashboard/classroom/review">
                  <div className="flex justify-center">
                    <img
                      src="/whasapp_logo.png"
                      alt="image"
                      className="object-cover h-full md:h-32 w-full"
                    />
                  </div>
                </Link>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words ">
                    How to Start a Profitable WhatsApp TV Business
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <Link to="/dashboard/classroom/video">
                  <div className="flex justify-center">
                    <img
                      src="/instagram.png"
                      alt="image"
                      className="object-cover h-full md:h-32 w-full"
                    />
                  </div>
                </Link>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words ">
                    Instagram Ads (Crazy Secret Exposed)
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/workflow.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    Facebook Ads Workshop
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/tree.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    Introduction to Affinatesales
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/robo.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    WhatsApp Automation Workshop
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/letter.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">Email Marketing</h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/web_design.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">Website Design</h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>
              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/master_class.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    Urgent 2K Master-class
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/landing_page.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    How to Create a Simple Landing Page
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>

              <div className="border min-w-0">
                <div className="flex justify-center">
                  <img
                    src="/organic.png"
                    alt="image"
                    className="object-cover h-full md:h-32 w-full"
                  />
                </div>
                <div className=" font-semibold my-2 flex justify-between px-2">
                  <p>1220 students</p>
                  <p> 4 Months ago</p>
                </div>
                <div className="px-2">
                  <h2 className="font-bold break-words">
                    Organic Lead Generation for Physical & OnlineBusiness
                  </h2>
                  <p className="text-sm break-words">
                    English Intermediate Level
                  </p>
                  <p className="text-sm font-bold">By Affinetsales</p>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};
