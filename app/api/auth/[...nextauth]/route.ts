import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {jwtDecode} from "jwt-decode";

async function refreshAccessToken(token) {
  try {
    const res = await fetch("http://localhost:8000/api/v1/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token.refreshToken }),
    });

    const data = await res.json();

    if (!res.ok || !data.loginToken) {
      throw new Error("Failed to refresh access token");
    }

    return {
      ...token,
      accessToken: data.loginToken,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email or password");
          return null;
        }

        const res = await fetch("http://localhost:8000/api/v1/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        if (!res.ok) return null;

        const data = await res.json();

        if (!data.loginToken || !data.refreshToken || !data.user) {
          console.log("Invalid response data from login API");
          return null;
        }

        return {
          ...data.user,
          accessToken: data.loginToken,
          refreshToken: data.refreshToken,
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      // First login: store access and refresh tokens
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
          },
        };
      }

      // Check if access token expired
      try {
        const decoded = jwtDecode(token.accessToken);
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp && decoded.exp < now) {
          console.log("Access token expired — refreshing...");
          return await refreshAccessToken(token);
        }
      } catch (err) {
        console.error("Failed to decode access token:", err);
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      session.error = token.error;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
