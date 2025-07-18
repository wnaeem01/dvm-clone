'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";

import { getSession } from "next-auth/react";

// Inside an async function
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        // Handle authentication error
        console.error("Login failed:", result.error);
        // Show error to user (e.g., set state)
      } else {
        // Login successful - redirect or update state
        // window.location.href = "/dashboard"; // Example redirect

const session = await getSession();
const token = session?.accessToken;
         const res = await fetch("http://localhost:8000/api/v1/user/6878ea695ed13e890ed4be8b", {
          headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔐 Include token here
        },
        });
        console.log("Login successful:", res);
        
      }
    } catch (error) {
      console.error("SignIn error:", error);
      // Handle unexpected errors
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit} className="text-black">
        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 12 }}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 12 }}
        />

        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Sign In
        </button>
      </form>

      {errorMsg && <p style={{ color: "red", marginTop: 10 }}>{errorMsg}</p>}
    </div>
  );
}
