"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { HoverCardDemo } from "@/components/hover-card";
import { Badge } from "@/components/ui/badge";
import CustomMenu from "@/components/customenu";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import FileUpload from "@/components/FileUpload";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky flex pr-6 h-auto pt-2 inset-x-0 top-1 z-30 w-full backdrop-blur-lg drop-shadow-lg transition-all">
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

      <MaxWidthWrapper className="mb-6 mt-10 sm:mt-20 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 mt-4  ">
          <Badge className="px-4 py-2 flex max-w-fit  overflow-hidden rounded-full cursor-default">
            Textify is now public!
          </Badge>
        </div>
        <h1 className="max-w-6xl text-3xl md:text-5xl lg:text-[53.94px] leading-8 sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-1.0788px] lg:leading-[59.334px]">
          Instant Conversations with Your Documents—Upload, Ask, and Discover
          Answers Effortlessly
        </h1>
      </MaxWidthWrapper>
      <div className="pb-20">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-100 to-zinc-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-slate-100 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
              <p className="text-base md:text-2xl lg:text-[23.97px] md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[28px] tracking-[-0.3px] leading-[20px] mt-10 mb-10">
                Textify empowers you to effortlessly extract insights from your
                documents, enabling precise answers to your questions with
                unmatched clarity and speed, thanks to its advanced AI-driven
                capabilities.
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-100 to-zinc-400 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      <div className=" px-6">
        <div className=" mx-auto max-w-5xl flex sm:mb-10 mb-6 items-center justify-end">
          <img
            src="/Vector 3.png"
            alt="drag-arrow"
            className="w-20 scale-x-[-1] -rotate-45"
          />
          <p className="text-center text-2xl max-w-40 w-auto font-[pacifico] leading-6 -rotate-12">
            Drag and drop your file here
          </p>
        </div>

        <FileUpload />
      </div>
      <div className="mx-auto mb-32 mt-20 max-w-5xl lg:mt-40">
        <div className="mb-12 px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-soehne text-4xl sm:text-5xl">
              Get answers from your documents in seconds
            </h2>
            <p className="mt-4 text-lg md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[34px] tracking-[-0.3px] leading-[22px] font-soehne">
              Textify redefines how you chat with your PDF files—easy and
              intuitive.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4  mb-32 mt-20 lg:mt-40 justify-between">
        <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-xl">
              For Researchers
            </CardTitle>
            <CardDescription className="text-base sm:text-sm">
              Explore scientific papers, academic articles, and books to get the
              information you need for your research.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/researchers.png"
              alt="research"
              className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
            />
          </CardContent>
        </Card>

        <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-xl">For Students</CardTitle>
            <CardDescription className="text-base sm:text-sm">
              Study for exams, get help with homework, and answer multiple
              choice questions faster than your classmates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/students.png"
              alt="student"
              className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
            />
          </CardContent>
        </Card>

        <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-xl">
              For Professionals
            </CardTitle>
            <CardDescription className="text-base sm:text-sm">
              Navigate legal contracts, financial reports, manuals, and training
              material. Ask questions to any PDF to stay ahead.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/professionals.png"
              alt="professional"
              className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
