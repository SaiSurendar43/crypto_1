import Connect from "@/Components/Connect";
import Features from "@/Components/Features";
import Market from "@/Components/Market";
import Swap from "@/Components/Swap";
import 'tailwindcss/tailwind.css'

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <>
      <Swap/>
        <Market />
        <Features />
        <Connect />
      </>
    </main>
  );
}
