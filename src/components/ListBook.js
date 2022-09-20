import React from "react";
import BookCard from "./BookCard";
import { getBooks } from "services/book.service";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  addCartProduct,
  getCartCount,
  getSubTotal,
  calculateTax,
  getTotalAmount,
} from "../features/auth/cartSlice";
import { useDispatch } from "react-redux";
const itemsPerPage = 5;

const ListBook = () => {
  const dispatch = useDispatch();
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

  let productObj = {
    id: "",
    title: "",
    price: "",
  };

  const addToCart = (item) => {
    productObj = {
      id: item._id,
      title: item.title,
      price: item.price,
    };
    dispatch(addCartProduct(productObj));
    // dispatch(getCartCount())
    // dispatch(getSubTotal())
    // dispatch(calculateTax())
    // dispatch(getTotalAmount())
  };
  return (
    <div>
      <div className="m-10 ">
        <p className="text-2xl font-extrabold">Featured Books:</p>
      </div>
      <div className="flex flex-wrap gap-8 ml-12">
        {books &&
          books.map((book) => {
            return (
              <BookCard
                key={book._id}
                title={book.title}
                price={book.price}
                onClickAdd={() => addToCart(book)}
              />
            );
          })}
      </div>
      <div className="my-10">
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
