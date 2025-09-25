import { Star } from "lucide-react";
import React, { useContext } from "react";
import { UserContext } from "../utils/userContext";
export const ReviewClassroom = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-white py-10">
        <div className=" rounded-md shadow-md p-3 md:p-5 ">
          <div className="flex justify-between my-2 items-center">
            <img
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firstName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firsName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firstName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firstName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firstName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
              src={user?.image || "/Portrait_Placeholder.png"}
              alt={user?.firstName}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-bold text-black">{user?.firstName}</h3>
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
    </div>
  );
};
