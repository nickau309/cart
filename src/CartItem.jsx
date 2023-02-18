import React from "react";
import { useAppContext } from "./AppContext";

export default function CartItem({ id, img, title, price, amount }) {
  const { remove, increase, decrease } = useAppContext();

  return (
    <article className="grid grid-cols-[auto_1fr_auto] gap-6">
      <img src={img} alt={title} className="aspect-square w-20 object-cover" />
      <div className="flex flex-col items-start justify-between">
        <div>
          <h4 className="mb-1 text-sm font-bold capitalize tracking-wider md:text-base">
            {title}
          </h4>
          <h4 className="text-sm font-bold tracking-wider text-slate-500 md:text-base">
            ${price}
          </h4>
        </div>
        <button
          className="text-xs tracking-wider text-sky-600 duration-200 ease-linear hover:text-blue-300"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <button onClick={() => increase(id)} className="group w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-sky-600 duration-200 ease-linear group-hover:fill-blue-300"
          >
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <span className="text-center text-xl">{amount}</span>
        <button onClick={() => decrease(id)} className="group w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-sky-600 duration-200 ease-linear group-hover:fill-blue-300"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
