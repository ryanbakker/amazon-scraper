"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { toast } from "react-hot-toast";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    // Toaster notification
    const notification = toast.loading(`Starting a scraper for: ${input}`);

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    try {
      // Call our API to activate scraper...

      const response = await fetch("/api/activateScraper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: input }),
      });

      const { collection_id, start_eta } = await response.json();

      toast.success("Scraper Started Successfully", {
        id: notification,
        position: "top-right",
      });

      router.push(`/search/${collection_id}`);
    } catch (error) {
      // Handle errors
      toast.error("Whoops... Something went wrong!", {
        id: notification,
        position: "top-right",
      });
    }

    // Wait for the response
  };

  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-red-100 max-w-md"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-red-400 placeholder:text-red-300"
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-red-300" />
      </form>
    </header>
  );
}

export default Header;
