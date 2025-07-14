'use client';
const SigninButton = () => {
  return (
    <>
            <button
                className="text-xs sm:text-lg bg-[#ab45db] text-white px-4 py-2 rounded hover:bg-[#9b3bb0] transition-colors duration-300 m-3 rounded-3xl flex items-center gap-2
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ab45db] focus:ring-offset-2"
                onClick={() => alert('Sign in functionality not implemented yet')}
            >
                Sign In
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden sm:inline sm:w-4 sm:h-4 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
    </>
  )
}

export default SigninButton