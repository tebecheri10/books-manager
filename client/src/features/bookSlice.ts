import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookType } from "../typings/book";

interface BookInitialState {
  booksList: bookType[];
  createdBook: bookType | {};
}

const initialState: BookInitialState = {
  booksList: [],
  createdBook: {
    title: "default",
    desc: "default",
    cover:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png",
  },
};

export const getBooks = createAsyncThunk("Books", async () => {
  const GET_BOOKS_URL = "http://localhost:5001/api/books";

  const response = await fetch(GET_BOOKS_URL);
  const booksData = await response.json();
  return booksData;
});

export const createNewBook = createAsyncThunk(
  "NewBook",
  async (bookData: bookType) => {
    const CREATE_BOOK_URL = "http://localhost:5001/api/books";

    if (Object.keys(bookData).length <= 0) {
      throw new Error("All fields are mandatory");
    }

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    };
    try {
      const response = await fetch(CREATE_BOOK_URL, config);
      const bookCreateData = await response.json();
      return bookCreateData;
    } catch (error) {
      console.log("Error trying to create a book: ", error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "DeleteBook",
  async (bookId: string) => {
    const DELETE_BOOK_URL = `http://localhost:5001/api/books/${bookId}`;

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!bookId) {
      throw new Error("Invalid ID");
    }

    try {
      const response = await fetch(DELETE_BOOK_URL, config);
      const deletedBookData = await response.json();
      return deletedBookData;
    } catch (error) {
      console.log("Error trying to delete the book: ", error);
    }
  }
);

export const updateBookById = createAsyncThunk("DeleteBook",async ({bookData, bookId}:{bookData: bookType, bookId:number}) => {
    const UPDATE_BOOK_URL = `http://localhost:5001/api/books/${bookId}`;

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    };

    if (!bookId) {
      throw new Error("Invalid ID");
    }

    if (Object.keys(bookData).length <= 0) {
      throw new Error("At least one field must be updated");
    }

    try {
      const response = await fetch(UPDATE_BOOK_URL, config);
      const updatedBookData = await response.json();
      return updatedBookData;
    } catch (error) {
      console.log("Error trying to update the book: ", error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    fillNewBookDate: (state, action) => {
      state.createdBook = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksList = action.payload;
    });
    builder.addCase(createNewBook.fulfilled, (_, action) => {
      console.log("book created:", action.payload);
    });
    builder.addCase(deleteBook.fulfilled, (_, action) => {
      console.log("book deleted:", action.payload);
    });
    builder.addCase(updateBookById.fulfilled, (_, action) => {
      console.log("book updated:", action.payload);
    });
  },
});

export const { fillNewBookDate } = bookSlice.actions;
export default bookSlice.reducer;
