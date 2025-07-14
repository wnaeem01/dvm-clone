import MediaArray from "../Items/MediaArray";
import React from "react";
import MediaLinks from "./Sub-Components/medialinks";

const Topheader = () => {
  return (
    <>
      <div
        className="sm:flex sm:justify-between sm:align-items-center
         space-y-2  py-1 
            px-30 bg-[#ab45db]"
      >
        <ul className="social-links flex">
          <MediaLinks MediaArray={MediaArray} />
        </ul>
        <div className="contact-phone flex items-center space-x-2">
            <span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3"
                aria-label="Phone"
                role="img"
                >
                <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.25A2.25 2.25 0 019 4.5v1.636c0 .383-.12.756-.34 1.062L7.62 8.443a.75.75 0 00-.133.805 11.747 11.747 0 006.265 6.265.75.75 0 00.805-.133l1.245-1.245a1.5 1.5 0 011.062-.34H19.5a2.25 2.25 0 012.25 2.25V19.5a2.25 2.25 0 01-2.25 2.25h-.75C9.65 21.75 2.25 14.35 2.25 6.75V4.5z" />
                </svg>
            </span>
            <span className="text-sm">+1 (407)-557-6073</span>
        </div>
      </div>
    </>
  );
};

export default Topheader;
