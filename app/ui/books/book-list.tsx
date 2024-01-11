import React from 'react';
import BookCard from './book-card';
import {Book} from "@/app/lib/definitions";

export interface BookListProps {
  books: Book[];
  onBookCardDelete: (bookId: string) => void;
}

const BookList = ({ books, onBookCardDelete }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} onDelete={onBookCardDelete} />
      ))}
    </div>
  );
};

export default BookList;