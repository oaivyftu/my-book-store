'use client'
import {books as booksData} from "@/app/lib/data";
import BookList from "@/app/ui/books/book-list";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";
import {loadBooks, removeBook, selectBooks} from "@/app/lib/features/books/booksSlice";
import {useRouter} from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks)
  const router = useRouter();

  const handleCreateBook = () => {
    // Redirect or navigate to the page where you can create a new book
    router.push(`/book/${uuidv4()}`);
  };
  useEffect( () => {
    if (books.length === 0) dispatch(loadBooks(booksData));
  }, []);
  return (
    <>
      <div className="mb-5">
        <button
          onClick={handleCreateBook}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Create New Book
        </button>
      </div>
      <BookList books={books} onBookCardDelete={bookId => { dispatch(removeBook(bookId)) }} />
    </>
  );
}
