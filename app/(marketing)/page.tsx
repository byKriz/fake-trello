import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          headingFont.className
        )}
      >
        <div
          className="mb-4 flex justify-center items-center border 
        shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full 
        uppercase"
        >
          <Medal className="size-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          FakeTrello helps teams move
        </h1>
        <h2
          className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 
        to-pink-600 text-white px-4 p-3 rounded-md w-fit"
        >
          work foward.
        </h2>
      </div>
      <p className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-xl text-center mx-auto", textFont.className)}>
        Collaborate, manage projects, and research new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with FakeTrello.
      </p>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Get FakeTrello for free</Link>
      </Button>
    </section>
  );
}
