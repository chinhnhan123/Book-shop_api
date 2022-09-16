import React from "react";
import BookCard from "./BookCard";
import { getBooks } from "services/book.service";
import { useEffect, useState } from "react";

const ListBook = () => {
  const [books, setBooks] = useState([]);
  console.log("Book state", books);
  const handleGetBooks = async () => {
    const response = await getBooks();
    setBooks(response.data.docs);
    console.log("Dats:", response.data.docs);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div>
      <div className="m-10 ">
        <p className="text-2xl font-extrabold">Featured Books:</p>
      </div>
      <div className="flex gap-8">
        {books &&
          books.map((book) => {
            return (
              <BookCard key={book.id} title={book.title} price={book.price} />
            );
          })}
      </div>
    </div>
  );
};

export default ListBook;
