import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "services/book.service";
import Banner from "./../Banner";
import ListBook from "./../ListBook";

const Book = () => {
  const response = getBooks();

  const books = response.then((value) => value.data.docs) || [];

  const loggedInUser = useSelector((state) => state.login);

  return (
    <div>
      <Banner></Banner>
      <ListBook></ListBook>
    </div>
  );
};

export default Book;
