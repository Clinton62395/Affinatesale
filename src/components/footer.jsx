import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container  bg-yellow-100 text-start w-full mx-auto max-w-full">
      <div className=" flex justify-between  max-w-6xl px-5 mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2  py-4 mx-auto  ">
          <div className="flex flex-col">
            <h6 className="font-bold mb-2">Services</h6>
            <Link>Dashboard</Link>
            <Link>Classroom</Link>
            <Link>Bonus</Link>
            <Link>Live Sessions</Link>
            <Link>Top Earners</Link>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-2"> Solutions</h6>
            <Link> Join our Community</Link>
            <Link>Customer Care</Link>
            <Link> Account Settings</Link>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-2">Ressources</h6>
            <Link>Pricing Blog</Link>
            <Link> Help center</Link>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-2">Delovelopers</h6>
            <Link> Status </Link>
            <Link>Documentation</Link>
            <Link>API</Link>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-2">Company</h6>
            <Link>About Us </Link>
            <Link>Facebook</Link>
            <Link>LinkedIn</Link>
            <Link>Instagram</Link>
          </div>
        </div>
      </div>
      {/* footer logo */}
      <hr className="border-gray-300 border-3 max-w-4xl mx-auto" />
      <div className="mt-3 max-w-5xl px-5 mx-auto flex justify-between items-center pb-5 flex-wrap">
        <div className="flex gap-x-2 font-semibold text-sm">
          <p>© 2023 Affinetsales.</p>
          <Link>Terms</Link>
          <Link>Privacy</Link>
          <Link>Security</Link>
          <Link>Cookies</Link>
        </div>
        <div>
          <img src="/message_logo.png" alt="logo-message" className="h-10 object-cover" />
        </div>
        <div className="flex gap-x-2 text-semibold text-sm">
          <span>
            <Facebook />
          </span>
          <span>
            <Youtube />
          </span>
          <span>
            <Instagram />
          </span>
        </div>
      </div>
    </footer>
  );
};
