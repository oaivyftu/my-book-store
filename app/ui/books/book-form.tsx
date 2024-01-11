'use client';

// BookForm.js
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Book} from "@/app/lib/definitions";

interface BookFormProps {
  book: Book;
  onUpdate: (updatedBook: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ book, onUpdate }) => {
  const [formData, setFormData] = useState<Book>({
    id: book.id,
    name: book.name,
    price: book.price,
    category: book.category,
    description: book.description,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Book Name*
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-600">
          Price*
        </label>
        <input
          required
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
          Category*
        </label>
        <input
          required
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default BookForm;