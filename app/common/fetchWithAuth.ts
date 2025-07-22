// lib/fetchWithAuth.js
import { getSession } from "next-auth/react";
import {jwtDecode} from "jwt-decode";

async function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp && decoded.exp < now;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }
}

export async function fetchWithAuth(url, options = {}) {
  const session = await getSession();

  if (!session || !session.accessToken) {
    throw new Error("No access token found in session.");
  }

  let accessToken = session.accessToken;

  const expired = await isTokenExpired(accessToken);

  if (expired) {
    console.log("Token expired. Refreshing...");

    const res = await fetch("/api/auth/session?update=true");
    const updatedSession = await res.json();

    if (!res.ok || !updatedSession.accessToken) {
      throw new Error("Token refresh failed.");
    }

    accessToken = updatedSession.accessToken;
  }

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
}
