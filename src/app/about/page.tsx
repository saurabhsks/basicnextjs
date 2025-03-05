"use client";
import {useRouter} from "next/navigation";

export default function About() {
  const router = useRouter();
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>About</h1>
        <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Go Home</button>
        <p>This is the about page</p>
      </div>
    );
  };