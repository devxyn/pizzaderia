import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../utilities/pizzaData";

const Menu = () => {
  return (
    <main className="bg-yellow-500 h-screen pt-[70px] flex flex-col items-center">
      <h1 className="text-4xl font-bold my-10">OUR MENU </h1>
      <div className="flex w-full flex-wrap justify-center gap-4">
        {pizzaData.map((pizza) => {
          return (
            <Pizza key={pizza.name} name={pizza.name} price={pizza.price} photo={pizza.photo} />
          );
        })}
      </div>
    </main>
  );
};

export default Menu;
