const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const {getAllBooks,getSingleBookById,getAllIssuedBooks,addNewBook,updateBookById}=require("../controllers/book-controller");
// const { route } = require("./users");

const router = express.Router();
const {UserModel,BookModel}=require("../modals/index");
/**
 * Route: /books/:id
 * Method: GET
 * Description: Get books by their id
 * Access: Public
 * Parameters: Id
 */
/*router.get("/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book Not Found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Found The Book By Their Id",
    data: book,
  });
});*/
router.get("/:id",getSingleBookById);
/**
 * Route: /books
 * Method: GET
 * Description: Getting all books
 * Access: Public
 * Parameters: None
 */
/*router.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Got all the Books", data: books });
});*/
router.get("/",getAllBooks);

/**
 * Route: /books/issued
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: None
 */
router.get("/issued/by-user",getAllIssuedBooks);
/*router.get("/issued/by-user", (req, res) => {
  const usersWithTheIssuedBook = users.filter((each) => {
    if (each.issuedBook) return each;
  });
  const issuedBooks = [];

  usersWithTheIssuedBook.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);

    book.issuedBy = each.name;
    book.issuedDate = each.issuedDate;
    book.returnDate = each.returnDate;

    issuedBooks.push(book);
  });
  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Have Been Issued Yet..",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Users With The Issued Books...",
    data: issuedBooks,
  });
});*/

/**
 * Route: /
 * Method: POST
 * Description: Adding a New Book
 * Access: Public
 * Parameters: None
 * Data : id, name, genre, price, publisher, author
 */
router.post("/",addNewBook);
/*router.post("/", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      sucess: false,
      message: "No Data To Add A Book",
    });
  }

  const book = books.find((each) => each.id === data.id);
  if (book) {
    return res.status(404).json({
      success: false,
      message: "Id Already Exists !!",
    });
  }
  const allBooks = { ...books, data };
  return res.status(201).json({
    success: true,
    message: "Added Book Succesfully",
    data: allBooks,
  });
});*/

/**
 * Route: /:id
 * Method: PUT
 * Description: Updating a Book By Its ID
 * Access: Public
 * Parameters: Id
 * Data : id, name, genre, price, publisher, author
 */
router.put("/updateBook/:id",updateBookById);
/*router.put("/updateBook/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(400).json({
      success: false,
      message: "Book Not Found For This ID",
    });
  }

  const updateData = books.map((each) => {
    if (each.id === id) {
      return { ...each, ...data };
    }

    return each;
  });
  return res.status(200).json({
    success: true,
    message: "Updated a Book By Their Id",
    data: updateData,
  });
});*/

module.exports = router;