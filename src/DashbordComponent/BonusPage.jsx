import React, { useContext } from "react";
import { UserContext } from "../utils/userContext";
export const Bonus = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className=" mx-auto w-full mt-5 ">
        <div className="flex items-center justify-between pb-5">
          <h3 className="#000000 semibold">Learn and Earn</h3>
          <img
            src={user.image || "/Portrait_Placeholder.png"}
            className="w-10 h-10 rounded-full"
            alt={user.firsName}
          />
        </div>
        <div className="mt-10">
          <div className="max-w-4xl mx-auto">
            <img src="/bonus.png" alt="photo" className="w-full h-full" />
          </div>
          <div className="text-center my-5">
            <button
              type="button"
              className="py-2 bg-[#00D78A] hover:bg-[#018b5b] transition-colors duration-200 text-fuchsia-50 font-semibold rounded-md px-5"
            >
              Get acess
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
