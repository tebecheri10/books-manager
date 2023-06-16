const express = require("express")
const router = express.Router()
const { getAllBooks, createBook, deleteBookById } = require("../controllers/booksController")

router.get("/books", getAllBooks)

router.post("/books", createBook)

router.delete("/books/:id", deleteBookById)

module.exports = router
