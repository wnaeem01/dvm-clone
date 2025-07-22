import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f1e6f4] text-gray-700 px-8 py-16 mt-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
            <img  className="mix-blend-multiply" src="/assets/Screenshot.png" alt="" />
          <div className="p-5">
            <p className="text-sm leading-relaxed mb-4">
            DVM Central is a veterinary marketplace that connects veterinarians with reliable suppliers for all their animal healthcare needs.
          </p>
          <p className="text-sm leading-relaxed">
            Sellers benefit from no upfront costs and customizable shops. Buyers enjoy direct access to trusted vendors, exclusive deals, and a wide range of vet products and services.
          </p>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gray-900 font-semibold text-lg mb-5 tracking-wide flex items-center space-x-2">
            {/* Phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.6 7.59-1.35 2.44a11.05 11.05 0 005.44 5.44l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
            <span>Contact Info</span>
          </h4>
          <address className="not-italic text-sm leading-relaxed space-y-3">
            <p className="flex items-center space-x-2 text-gray-600">
              {/* Location icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4-4-7-7-7-11a7 7 0 1114 0c0 4-3 7-7 11z"
                />
              </svg>
              <span>4700 Millenia Boulevard, Suite 175, Orlando, FL 32839</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-600">
              {/* Mail icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 4H8m-4-8v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                />
              </svg>
              <a href="mailto:Info@dvmcentral.com" className="text-blue-600 hover:underline">
                Info@dvmcentral.com
              </a>
            </p>
            <p className="flex items-center space-x-2 text-gray-600">
              {/* Phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l3.6 7.59-1.35 2.44a11.05 11.05 0 005.44 5.44l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
              <a href="tel:+14075576073" className="text-blue-600 hover:underline">
                +1 (407)-557 6073
              </a>
            </p>
          </address>
          <div className="mt-6 rounded-md overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8316276743303!2d-81.4428770236945!3d28.484616875745772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77eba9f4fffff%3A0xbe47ad232f0645f!2s4700%20Millenia%20Blvd%20Ste%20175%2C%20Orlando%2C%20FL%2032839%2C%20USA!5e0!3m2!1sen!2s!4v1753112204387!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Shop By Categories */}
        <div>
          <h4 className="text-gray-900 font-semibold text-lg mb-5 tracking-wide flex items-center space-x-2">
            {/* Folder icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h4l3 3h11v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            <span>Shop By Categories</span>
          </h4>
          <ul className="text-sm space-y-2 text-gray-700">
            {[
              "Dentistry",
              "Identification",
              "Surgical Equipment",
              "Vaccines",
              "Foods",
              "Office/Break Room Supplies",
              "Lighting",
            ].map((category) => (
              <li
                key={category}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Info & Newsletter */}
        <div>
          <h4 className="text-gray-900 font-semibold text-lg mb-5 tracking-wide flex items-center space-x-2">
            {/* Shield Check icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a9 9 0 009-9V5l-9-3-9 3v8a9 9 0 009 9z" />
            </svg>
            <span>Buy With Confidence</span>
          </h4>
          <ul className="text-sm space-y-2 mb-8 text-gray-700">
            {[
              "About Us",
              "Contact",
              "FAQ's",
              "Our Mission",
              "Track Order",
              "Privacy Policy",
              "Terms and Conditions",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>

          <div>
            <h5 className="font-semibold mb-3 text-gray-900 tracking-wide flex items-center space-x-2">
              {/* Mail icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 4H8m-4-8v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                />
              </svg>
              <span>Subscribe to Newsletter</span>
            </h5>
            <p className="text-xs mb-4 text-gray-600">
              Subscribe and receive our promo offers and news directly in your inbox.
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-xs select-none">
        &copy; {new Date().getFullYear()} DVM Central. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
