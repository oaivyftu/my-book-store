import React from 'react';
import {Book} from "@/app/lib/definitions";
import Link from "next/link";

interface BookCardProps {
  book: Book;
  onDelete: (bookId: string) => void;
}

const BookCard = ({ book, onDelete }: BookCardProps) => {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onDelete(book.id)
  }

  return (
    <Link href={`/book/${book.id}`} className="bg-white p-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <h2 className="text-xl font-bold mb-2">{book.name}</h2>
      <p className="text-gray-700 mb-2">${Number(book.price).toFixed(2)}</p>
      <p className="text-gray-500 mb-4">{book.category}</p>
      <p className="text-gray-800">{book.description}</p>
      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </Link>
  );
};

export default BookCard;