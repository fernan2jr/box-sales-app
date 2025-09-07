import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 h-screen flex-col items-center justify-center">
      <Image
        src="/boxlogo-h.svg"
        alt="Box Logo"
        className="w-72 dark:invert"
        width={288}
        height={36}
        priority
      />
    </div>
  );
}
