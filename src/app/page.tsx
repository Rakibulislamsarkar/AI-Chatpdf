import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <>
      <nav className="sticky h-auto p-2 inset-x-0 top-0 z-30 w-full backdrop-blur-lg drop-shadow-lg transition-all">
        <div className="items-center justify-center max-w-[1200px] w-full mx-auto px-4">
          <div className="flex text-black justify-between items-center">
            <Link href="/">
              <img src="/favicon.png" alt="logo" className="w-10 h-10" />
            </Link>
            <div className="flex gap-6">
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                })}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                })}
              >
                Sign-in
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "lg",
                  variant: "default",
                })}
              >
                Get Started
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
      <div className="mb-6 mt-10 sm:mt-20 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Textify is now public!
          </p>
        </div>
        <h1 className="max-w-6xl text-4xl font-regular md:text-5xl lg:text-[53.94px] sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-1.0788px] lg:leading-[59.334px] font-soehne">
          Instant Conversations with Your Documents—Upload, Ask, and Discover
          Answers Effortlessly
        </h1>
      </div>
    </>
  );
}
