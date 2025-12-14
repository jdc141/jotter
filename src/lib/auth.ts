// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { prisma } from "./prisma";

// Validate required environment variables
function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

const githubId = getEnvVar("GITHUB_ID");
const githubSecret = getEnvVar("GITHUB_SECRET");

// Validate NEXTAUTH_SECRET (required by NextAuth)
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing required environment variable: NEXTAUTH_SECRET");
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as unknown as Parameters<typeof PrismaAdapter>[0]) as Adapter,
  providers: [
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (!session.user) {
        throw new Error("Session user is missing");
      }
      if (!token.sub) {
        throw new Error("Token subject (user ID) is missing from JWT token");
      }
      session.user.id = token.sub;
      return session;
    },
  },
};