//import packages
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');

//setup the lowdb database
const adapter = new FileSync("./data/db.json");
const db = low(adapter);
db.defaults({books: [], user: {}}).write();


//functions
const getBooks = (req, res) => {
    const data = db.get("books").value();
    return res.json(data);
}

const getForm = (req, res) => {
    res.sendFile(__dirname.slice(0,28) + "public/form.html")
}

const addBook = (req, res) => {
    const book = req.body;

    const newBook = {
        author: book.author,
        title: book.title,
        year: book.year,
        price: book.price
    };

    const date = new Date().toLocaleDateString();

    db.get("books").push({...newBook, id: date}).write();
    res.json({success: true});
}

//export functions
exports.getForm = getForm;
exports.getBooks = getBooks;
exports.addBook = addBook;