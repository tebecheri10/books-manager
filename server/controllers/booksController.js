const db = require("../config/dbConnection");

const getAllBooks = (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const createBook = (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`, `cover`) VALUES (?)";

  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const deleteBookById = (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      message: "book deleted successfully",
      deletedbook: data,
    });
  });
};

const updateBookById = (req, res) => {
  const bookId = req.params.id;

  const q = "UPDATE books SET `title` = ? , `desc`= ?, `cover`= ? WHERE id = ?";

  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      message: "book Updated successfully",
      updatedBook: req.title,
      extraData: data
    });
  });
};

updateBookById

module.exports = {
  getAllBooks,
  createBook,
  deleteBookById,
  updateBookById
};
