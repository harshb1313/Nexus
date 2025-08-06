import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
//import { PrismaAdapter } from "@auth/prisma-adapter"; // Optional if using Prisma

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // ✅ Add the user ID to token
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id && session.user) {
        session.user.id = token.id as string; // ✅ Inject token ID into session.user
      }
      return session;
    },
  },
});