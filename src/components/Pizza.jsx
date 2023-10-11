import React from "react";

const Pizza = (props) => {
  return (
    <div className="flex items-center w-[30%] border-4 border-black rounded-lg">
      <img className="h-[200px]" src={props.photo} alt={props.name} />
      <div className="flex flex-col flex-wrap h-full w-full px-2 text-center justify-center items-center bg-black text-white">
        <h1 className="font-bold text-xl mb-2 uppercase">{props.name}</h1>
        <p className="font-normal text-md mb-8">₱ {props.price}</p>
        <button className="px-5 py-2 text-lg border font-normal border-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black uppercase cursor-pointer">
          Order
        </button>
      </div>
    </div>
  );
};

export default Pizza;
