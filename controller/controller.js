//import packages
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const {nanoid} = require("nanoid");

//setup the lowdb database
const adapter = new FileSync("./data/db.json");
const db = low(adapter);
db.defaults({books: [], users: [], orders: []}).write();


//functions
const getBooks = (req, res) => {
    const data = db.get("books").value();
    return res.json(data);
}

const addBook = (req, res) => {
    const newBook = req.body;
    db.get("books").push({...newBook, id: nanoid()}).write();
    res.json({success: true});
}

const getBookById = (req, res) => {
    const el = db.get("books")
    .find({id: req.params.id})
    .value();
    res.json(el);
}

const updateBookById = (req, res) => {
    const book = db.get("books").find({id: req.params.id}).value()
    const updated = {
        author: req.body.author || book.author,
        title: req.body.title || book.title,
        year: req.body.year || book.year,
        price: req.body.price ||book.price,
        id: req.params.id
    }

    db.get("books").find({ id: req.params.id }).assign(updated).write();
    return res.json({success: true});
}


const deleteBookById = (req, res) => {
        db.get("books").remove({id: req.params.id}).write();
        return res.json({success: true});
    }

//user functions
const getUsers= (req, res) => {
    const data = db.get("users").value();
    return res.json(data);
}

const newUser = (req, res) => {
    const newUser = req.body;
    db.get("users").push({...newUser, id: nanoid()}).write();
    res.json({success: true});
}

const getUserById = (req, res) => {
    const el = db.get("users")
    .find({id: req.params.id})
    .value();
    res.json(el);
}

const updateUserById = (req, res) => {
    const user = db.get("users").find({id: req.params.id}).value()
    const updated = {
        fname: req.body.fname || user.fname,
        lname: req.body.lname || user.lname,
        password: req.body.password || user.password,
        email: req.body.email ||user.email,
        id: req.params.id
    }

    db.get("users").find({ id: req.params.id }).assign(updated).write();
    return res.json({success: true});
}

const deleteUserById = (req, res) => {
    db.get("users").remove({id: req.params.id}).write();
    return res.json({success: true});
}

//orders functions
const getOrders = (req, res) => {
    const data = db.get("orders").value();
    return res.json(data);
}

const newOrder = (req, res) => {
    const newOrder = req.body;

    db.get("orders").push({...newOrder, id: nanoid()}).write();
    res.json({success: true});
}

const getOrderById = (req, res) => {
    const el = db.get("orders")
    .find({id: req.params.id})
    .value();
    res.json(el);
}

const updateOrderById = (req, res) => {
    const order = db.get("orders").find({id: req.params.id}).value()
    const updated = {
        bookId: req.body.bookId || order.fname,
        quantity: req.body.lname || order.lname,
        id: req.params.id
    }

    db.get("orders").find({ id: req.params.id }).assign(updated).write();
    return res.json({success: true});
}

const deleteOrderById = (req, res) => {
    db.get("orders").remove({id: req.params.id}).write();
    return res.json({success: true});
}

//export functions
exports.getBooks = getBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;

//export user functions
exports.getUsers = getUsers;
exports.newUser = newUser;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;

//export orsers functions
exports.getOrders= getOrders;
exports.newOrder = newOrder;
exports.getOrderById = getOrderById;
exports.updateOrderById = updateOrderById;
exports.deleteOrderById = deleteOrderById;