"use client";

import { ModeToggle } from "@/components/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-1 flex-col w-full min-h-svh items-center justify-center">
      {children}
      <ModeToggle className="absolute top-4 right-4" />
      <div className="absolute bottom-4 text-sm text-muted-foreground">
        Version: v0.21.0 ~ Build: 27e9eb2277b90783f6d3a03d4895ce7dec6f0fe9
      </div>
    </div>
  );
}
