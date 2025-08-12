import { Footer } from "../components/footer";

export const Bonus = () => {
  return (
    <>
      <div className=" mx-auto max-w-md my-5 ">
        <div className="flex items-center justify-between pb-5">
          <h3 className="#000000 semibold">Learn and Earn</h3>
          <img
            src="/clinton.jpg"
            className="w-10 h-10 rounded-full"
            alt="photo"
          />
        </div>
        <div className="mt-10">
          <div>
            <img src="/bonus.png" alt="photo" className="w-full h-full" />
          </div>
          <div className="text-center mt-5">
            <button
              type="button"
              className="py-2 bg-[#00D78A] hover:bg-[#018b5b] transition-colors duration-200 text-fuchsia-50 font-semibold rounded-md px-5"
            >
              Get acess
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};
