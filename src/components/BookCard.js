import React from "react";

const BookCard = ({ title, price }) => {
  return (
    <div className="flex flex-col w-[300px] h-full p-3 border-2 rounded-lg shadow select-none text-slate-700 movie-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr4M2t0KanMCBPil8cWZcivaaqzi3k9bRA&usqp=CAU"
        alt=""
        className="object-cover w-full h-[250px] rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-1 text-xl text-bold">{title}</h3>
        <div className="flex items-center justify-between mb-8 text-sm opacity-50">
          <span className="">{price}$</span>
          <span className="">3</span>
        </div>
        <button className="w-full px-6 py-3 mt-auto font-medium text-white rounded-lg bg-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
