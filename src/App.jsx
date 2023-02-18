import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useAppContext } from "./AppContext";

export default function App() {
  const { isLoading } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {isLoading ? (
        <div className="pt-20">
          <h1 className="text-center text-5xl font-bold tracking-wider md:text-6xl">
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <Navbar />
          <CartContainer />
        </>
      )}
    </div>
  );
}
