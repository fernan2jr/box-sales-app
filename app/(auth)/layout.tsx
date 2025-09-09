"use client";

import { ModeToggle } from "@/components/theme-toggle";
import SvgBackground from "@/components/svg-pattern";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-svh items-center justify-center">
      <div className="w-full text-right px-4 pt-4 mb-6">
        <ModeToggle />
      </div>
      {children}
      <div className="mt-6 w-full text-center text-sm text-muted-foreground">
        Version: v0.10.0 ~ Build: 27e9eb2277b90783f6d3a03d4895ce7dec6f0fe9
      </div>
      <SvgBackground scale={600} className="text-muted-foreground/5" />
    </div>
  );
}
