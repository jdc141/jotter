"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { TypewriterLogo } from "@/components/ui/typewriter-logo";

export function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
      <Link href="/">
        <TypewriterLogo />
      </Link>

      <div className="flex items-center gap-4">
        {status === "loading" ? (
          <span className="text-sm text-dim">...</span>
        ) : session ? (
          <>
            <Link
              href="/journal"
              className="text-sm text-dim hover:text-charcoal transition-colors"
            >
              Journal
            </Link>
            <button
              onClick={() => signOut()}
              className="text-sm text-dim hover:text-charcoal transition-colors"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="text-sm text-dim hover:text-charcoal transition-colors"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}