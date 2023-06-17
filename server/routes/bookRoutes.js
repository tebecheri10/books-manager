const express = require("express")
const router = express.Router()
const { getAllBooks, createBook, deleteBookById, updateBookById } = require("../controllers/booksController")

router.get("/books", getAllBooks)

router.post("/books", createBook)

router.delete("/books/:id", deleteBookById)

router.put("/books/:id", updateBookById)


module.exports = router
