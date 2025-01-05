import type { MetaFunction } from "@remix-run/node";
import { toast } from "sonner";
import { BackgroundBeams } from "~/components/ui/background-beams";
import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";

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
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
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
