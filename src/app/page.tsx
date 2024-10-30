"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { HoverCardDemo } from "@/components/hover-card";
import { Badge } from "@/components/ui/badge";
import CustomMenu from "@/components/customenu";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky flex pr-6 h-auto pt-2 inset-x-0 top-2 z-30 w-full backdrop-blur-lg drop-shadow-lg transition-all">
        <div className="items-center justify-center max-w-[1200px] w-full mx-auto px-4">
          <div className="flex text-black justify-between items-center">
            <HoverCardDemo />

            <div className="hidden md:flex gap-6">
              <Link
                href="/pricing"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                Sign-in
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Get Started
              </Link>
            </div>

            {/* Dropdown Menu for smaller screens */}
            <div className="flex md:hidden">
              <CustomMenu />
            </div>
          </div>
        </div>
        <ModeToggle />
      </nav>

      <div className="mb-6 mt-10 sm:mt-20 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 mt-4 ">
          <Badge className="px-4 py-2 flex max-w-fit  overflow-hidden rounded-full cursor-default">
            Textify is now public!
          </Badge>
        </div>
        <h1 className="max-w-6xl text-4xl font-regular md:text-5xl lg:text-[53.94px] sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-1.0788px] lg:leading-[59.334px] font-soehne">
          Instant Conversations with Your Documents—Upload, Ask, and Discover
          Answers Effortlessly
        </h1>
      </div>
    </>
  );
}
