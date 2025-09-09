"use client";

import Image from "next/image";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 w-full max-w-md items-center justify-center">
      <Image
        src="/boxlogo-h.svg"
        alt="Box Logo"
        className="w-56 dark:invert"
        width={400}
        height={40}
        priority
      />
      <LoginForm />
    </div>
  );
}
