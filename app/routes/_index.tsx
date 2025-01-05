import type { MetaFunction } from "@remix-run/node";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";
import { Spotlight } from "~/components/ui/spotlight";
import { Atom } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const handleClickMe = () => {
  return toast("Event has been created", {
    description: `${new Date()}`,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};

export default function Index() {
  return (
    <>
      <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Spotlight <br /> is the new trend.
          </h1>
          <Atom className="w-32 h-32 py-5 animate-spin-slow text-white m-auto" />
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Welcome to <span className="sr-only">Remix</span>
            </h1>
            <div>
              <Button onClick={handleClickMe}>Click Me</Button>
            </div>
            <Toaster />
            <div className="h-[144px] w-[434px]">
              <img
                src="/logo-light.png"
                alt="Remix"
                className="block w-full dark:hidden"
              />
              <img
                src="/logo-dark.png"
                alt="Remix"
                className="hidden w-full dark:block"
              />
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
