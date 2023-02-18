import React from "react";
import { useAppContext } from "./AppContext";

export default function Navbar() {
  const { amount } = useAppContext();

  return (
    <nav className="bg-sky-600 py-5 text-white">
      <div className="mx-auto flex w-11/12 max-w-3xl items-center justify-between">
        <span className="text-2xl font-bold tracking-wider md:text-3xl">
          UseReducer
        </span>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-7 fill-white md:w-8"
          >
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="absolute right-0 top-0 flex aspect-square w-6 -translate-y-1/2 translate-x-1/2 justify-center rounded-full bg-sky-300 md:w-7">
            <span className="md:text-lg">{amount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
