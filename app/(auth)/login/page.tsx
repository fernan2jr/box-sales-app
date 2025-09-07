"use client";

import Image from "next/image";
import LoginForm from "@/components/login-form";
import { ModeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 px-0 md:p-10">
      <div className="flex flex-col gap-6 w-full max-w-md items-center justify-center">
        <Image
          src="/boxlogo-h.svg"
          alt="Box Logo"
          className="w-56 dark:invert"
          width={400}
          height={40}
          priority
        />
        <LoginForm />
        <ModeToggle className="absolute top-4 right-4" />
      </div>
    </div>
  );
}
