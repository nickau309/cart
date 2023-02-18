import React from "react";
import CartItem from "./CartItem";
import { useAppContext } from "./AppContext";

export default function CartContainer() {
  const { cart, total, clearCart } = useAppContext();

  return (
    <section className="mx-auto flex w-11/12 max-w-3xl flex-col gap-12 py-10">
      <header>
        <h2 className="text-center text-3xl font-bold uppercase tracking-wider md:text-4xl">
          Your Bag
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        {cart.length === 0 ? (
          <p className="text-center text-sm tracking-wider text-slate-500 md:text-base">
            is currently empty
          </p>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}
      </div>
      {cart.length > 0 && (
        <footer className="text-center">
          <hr className="mb-4 border-t-2 border-slate-500" />
          <div className="mb-8 flex justify-between">
            <span className="text-sm font-bold tracking-wider md:text-base">
              Total
            </span>
            <span className="text-sm font-bold tracking-wider md:text-base">
              ${total}
            </span>
          </div>
          <button
            onClick={clearCart}
            className="rounded-full border border-red-700 px-3.5 py-2 text-sm font-bold uppercase tracking-wider text-red-700 shadow-sm shadow-black/20 duration-200 ease-linear hover:border-red-500 hover:bg-red-500 hover:text-white md:px-4 md:text-base"
          >
            Clear Cart
          </button>
        </footer>
      )}
    </section>
  );
}
