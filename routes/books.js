const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");


//books routes
router
.route("/")
.get((req,res)=> controller.getBooks(req,res));

const booksArr = ["HP4", "HP3", "HP2", "HP1"];

router
.route("/books")
.get((req,res)=> {
    res.json(booksArr);
});

router
.route("/new")
.post((req, res) => controller.addBook(req, res));

router
.route("/:id")
.get((req, res) => controller.getBookById(req, res));

router
.route("/:id")
.put((req, res) => controller.updateBookById(req, res));

router
.route("/:id")
.delete((req, res) => controller.deleteBookById(req, res));

module.exports = router;
