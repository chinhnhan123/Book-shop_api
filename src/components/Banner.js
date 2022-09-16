import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between rounded-lg bg-banner h-[390px] mt-7 ">
      <div className="p-12">
        <h1 className="text-5xl font-black ">Temukan Koleksi Terbaik</h1>
        <p className="mt-2 leading-8">
          Berkembang menjadi lebih baik dengan buku berkualitas unggul dari
          penulis hebat dibidangnya.
        </p>
        <div className="flex mt-16 search">
          <div className="flex">
            <div className="flex-1">
              <input
                type="text"
                className="bg-white shadow-lg w-[400px] h-16 rounded-l-lg p-4 outline-none  text-slate-800"
                placeholder="Type here to search..."
              />
            </div>
            <button className="w-20 h-16 p-4 text-center bg-blue-700 rounded-r-lg shadow-lg button-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 font-bold text-slate-200 translate-x-[6px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="object-cover w-full h-full rounded-r-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_lZWRmoU8TPzbJNWmwpwroZqVpVq_Okd5tPggg17hg4G1yOTbqUZ0a24L-DjSvU-2Vo&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
