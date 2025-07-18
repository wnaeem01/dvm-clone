'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';


const Signupbutton = () => {
  const loginStatus= useSelector((state:any) => state.user?.value?.username);
  return (
    <Link href="/auth" className="bg-[#ab45db] text-white px-4 py-2 m-3 rounded-3xl flex font-semibold text-sm items-center">
      {loginStatus ? ` ${loginStatus}` : 'Sign Up'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        viewBox="0 0 20 15"
        className="ml-1"
      >
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </Link>
  );
};

export default Signupbutton;
