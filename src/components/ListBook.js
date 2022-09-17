import React from "react";
import BookCard from "./BookCard";
import { getBooks } from "services/book.service";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const itemsPerPage = 5;

const ListBook = () => {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  console.log("Book state", books);
  const handleGetBooks = async (page, limit) => {
    const response = await getBooks(page, limit);
    setBooks(response.data.docs);
    setPageCount(response.data.totalPages);
    console.log("Dats:", response.data);
    return response.data;
  };

  useEffect(() => {
    handleGetBooks(nextPage, itemsPerPage);
  }, [nextPage]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
  };

  return (
    <div>
      <div className="m-10 ">
        <p className="text-2xl font-extrabold">Featured Books:</p>
      </div>
      <div className="flex gap-8 flex-wrap ml-12">
        {books &&
          books.map((book) => {
            return (
              <BookCard key={book._id} title={book.title} price={book.price} />
            );
          })}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default ListBook;
