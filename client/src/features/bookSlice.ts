import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface bookType {
    title: string;
    desc: string
    cover: string
}

interface BookInitialState  {
    booksList: bookType[]
}

const initialState:BookInitialState = {
  booksList: []
}

export const getBooks = createAsyncThunk("Books", async()=>{
    const GET_BOOKS_URL = "http://localhost:5001/books"

    const response = await fetch(GET_BOOKS_URL)
    const booksData = await response.json()
    return booksData
})

const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(getBooks.fulfilled, (state, action)=>{
            state.booksList = action.payload
        })
    }
})

export default bookSlice.reducer