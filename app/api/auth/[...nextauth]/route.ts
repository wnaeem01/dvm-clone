import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        // Defensive check
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email or password");
          return null;
        }

        const res = await fetch("http://localhost:8000/api/v1/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        
        if (!res.ok) {
          return null;
        }

        const data = await res.json();

        if (!data.loginToken || !data.user) {
          console.log("Invalid response data from login API");
          return null;
        }

        return {
          ...data.user,
          loginToken: data.loginToken,
        };
      }

    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.loginToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: { signIn: "/auth/signin" },
});

export { handler as GET, handler as POST };
