// booksSlice.ts
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {books} from "@/app/lib/data";
import {Book} from "@/app/lib/definitions";
import {RootState} from "@/app/lib/store"; // Adjust the path as per your project structure

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books,
};

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    loadBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.unshift(action.payload);
    },
    editBook: (state, action: PayloadAction<{ id: string; updatedBook: Book }>) => {
      const { id, updatedBook } = action.payload;
      const index = state.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        state.books[index] = { ...state.books[index], ...updatedBook };
      }
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { loadBooks, addBook, editBook, removeBook } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.booksSlice.books;
export const selectBookById = (bookId: string) =>
  createSelector([selectBooks], (books) => books.find((book) => book.id === bookId));

export default booksSlice.reducer;
