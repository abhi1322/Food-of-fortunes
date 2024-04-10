import { ProductCategories, footerUseFullLinks } from "@/lib/constant";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full sm:w-3/4 px-8 mx-auto ">
      <div className="flex flex-wrap justify-between border-t   border-gray-200  mx-auto mt-10 py-8">
        {/* UseFull links section */}
        <div className="flex flex-col mb-8">
          <h6 className="text-lg font-bold text-neutral-500 mb-3">
            Useful Links
          </h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {footerUseFullLinks.map((link, index) => (
              <a
                key={index}
                href={"/"}
                className="text-xs text-gray-400 hover:text-green-600  transition-color"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Category links */}
        <div className="flex flex-col">
          <h6 className="text-lg font-bold text-neutral-500 mb-3">
            Categories
          </h6>
          <div className="grid gird-col-1  md:grid-cols-5 sm:grid-cols-3 gap-3">
            {ProductCategories.map((link, index) => (
              <a
                key={index}
                href={"/"}
                className="text-xs text-gray-400 hover:text-green-600 transition-color"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* copyright section */}
      </div>
      <div className="flex py-4 justify-center items-center w-full border-t border-gray-200 text-sm  text-gray-400 sel">
        <p>© Food of Fortunes, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
