'use client';

import BookForm from "@/app/ui/books/book-form";
import {addBook, editBook, selectBookById} from "@/app/lib/features/books/booksSlice";
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";
import {Book} from "@/app/lib/definitions";
import {useRouter} from "next/navigation";

export default function Page({ params: { bookId } }: { params: { bookId: string } }) {
  const router = useRouter();
  const book = useAppSelector(selectBookById(bookId)) || { id: '', name: '', price: 0, category: '', description: '' };
  const dispatch = useAppDispatch()
  const handleSubmitBookForm = (updatedBook: Book) => {
    if (book.id === "") {
      dispatch(addBook({...updatedBook, id: bookId}));
    } else {
      dispatch(editBook({ id: updatedBook.id, updatedBook }));
    }
    router.push("/");
  }
  return <BookForm book={book} onUpdate={handleSubmitBookForm} />;
}