"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { getSession } from "next-auth/react";
import { setUser, clearUser } from "../stores/userSlice";
import { TERipple } from "tw-elements-react";
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setErrorMsg("Invalid email or password");
      } else {
        const session = await getSession();
        if (session?.user) {
          dispatch(setUser(session.user));
        } else {
          dispatch(clearUser());
        }
        router.push('/');
      }
    } catch (error) {
      console.error("SignIn error:", error);
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  return (
    <section className="h-[700px] bg-[#ab45db]">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left image */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Illustration"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 p-8 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="rememberMe"
                  className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer select-none"
                >
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                    defaultChecked
                  />
                  <span>Remember me</span>
                </label>

                <a href="#!" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg  bg-[#ab45db] py-3  text-white font-semibold uppercase shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition"
              >
                Sign In
              </button>

              {errorMsg && (
                <p className="mt-4 text-red-600 text-sm">{errorMsg}</p>
              )}

              <div className="my-6 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-neutral-500">
                  OR
                </p>
              </div>

              {/* Social Buttons */}
              <TERipple rippleColor="light" className="w-full">
                <a
                  href="#!"
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#3b5998] px-7 py-3 text-white text-sm uppercase font-medium shadow-md hover:bg-[#2d4373] focus:outline-none focus:ring-2 focus:ring-[#2d4373] focus:ring-offset-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8H6v4h3v12h5V12h3.6l.4-4H14V6c0-.6.2-1 1-1h3V0h-4c-3.3 0-5 1.7-5 5v3z" />
                  </svg>
                  Continue with Facebook
                </a>
              </TERipple>

              <TERipple rippleColor="light" className="w-full">
                <a
                  href="#!"
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#55acee] px-7 py-3 text-white text-sm uppercase font-medium shadow-md hover:bg-[#2795e9] focus:outline-none focus:ring-2 focus:ring-[#2795e9] focus:ring-offset-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-0.6 1.8-1.6 2.2-2.7-1 .6-2 .9-3.1 1.2C19.3 2.5 17.8 2 16.3 2c-3.1 0-5.5 2.9-4.8 6-4.1-.2-7.7-2.1-10.1-5.1C.8 5.7 1.5 8.6 3.6 10c-.8 0-1.6-.2-2.2-.6v.1c0 2.3 1.6 4.4 3.9 4.9-.7.2-1.5.2-2.2.1.6 1.9 2.4 3.4 4.6 3.4C4.8 20.8 2 21.5 0 21.2c2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14.3-7.7 14-14.6.9-.7 1.7-1.6 2.4-2.6z" />
                  </svg>
                  Continue with Twitter
                </a>
              </TERipple>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
