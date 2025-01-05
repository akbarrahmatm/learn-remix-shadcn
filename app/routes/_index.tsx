import type { MetaFunction } from "@remix-run/node";
import { toast } from "sonner";
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
  );
}
