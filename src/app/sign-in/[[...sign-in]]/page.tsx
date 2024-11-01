import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen">
      <div className="w-full md:w-7/12 h-64 md:h-full bg-zinc-800 border-b md:border-b-0 md:border-r border-zinc-700 p-6 md:p-10 flex-col gap-3 justify-between hidden md:flex">
        <img
          src="/favicon.png"
          alt="signup"
          className="w-8 h-8 md:w-10 md:h-10 object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-xl">@Textify 2024</h1>
          <p className="text-sm md:text-base max-w-md">
            Join millions of students, researchers, and professionals to
            instantly answer questions and understand research with AI.
          </p>
        </div>
      </div>

      {/* Sign-up section */}
      <div className="flex justify-center items-center w-full md:w-2/5 p-6 md:p-0">
        <SignIn />
      </div>
    </div>
  );
}
