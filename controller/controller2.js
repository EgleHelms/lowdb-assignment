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

    db.get("books").push({...newBook, id: nanoid()}).write();
    res.json({success: true});
}

const getBookById = (req, res) => {
    const data = db.get("books").value();
    data.forEach(el => {
        if (req.params.id === el.id) {
        return res.json(el); 
    }
})
}

const updateBookById = (req, res) => {
    const data = db.get("books").value();
    const book = req.body;
    data.forEach((el,i) => {
        if (req.params.id === el.id) {
            const updated = {
                author: book.author || el.author,
                title: book.title || el.title,
                year: book.year || el.year,
                price: book.price || el.price,
                id: el.id
            }
            db.get("books").splice(i,1, updated).write();
        return res.json({success: true});
    }
})
}

const deleteBookById = (req, res) => {
    const data = db.get("books").value();
    data.forEach((el, i) => {
        if (req.params.id === el.id) {
            db.get("books").splice(i,1).write();
        return res.json({success: true});
    }
})
}

//user functions
const getUsers= (req, res) => {
    const data = db.get("users").value();
    return res.json(data);
}

const newUser = (req, res) => {
    const user = req.body;

    const newUser = {
        fname: user.fname,
        lname: user.lname,
        password: user.password,
        email: user.email,
    };

    db.get("users").push({...newUser, id: nanoid()}).write();
    res.json({success: true});
}

const getUserById = (req, res) => {
    const data = db.get("users").value();
    data.forEach(el => {
        if (req.params.id === el.id) {
        return res.json(el); 
    }
})
}

const updateUserById = (req, res) => {
    const data = db.get("users").value();
    const user = req.body;
    data.forEach((el,i) => {
        if (req.params.id === el.id) {
            const updated = {
                fname: user.fname || el.fname,
                lname: user.lname || el.lname,
                password: user.password || el.password,
                email: user.email || el.email,
                id: el.id
            }
            db.get("users").splice(i,1, updated).write();
        return res.json({success: true});
    }
})
}

const deleteUserById = (req, res) => {
    const data = db.get("users").value();
    data.forEach((el, i) => {
        if (req.params.id === el.id) {
            db.get("users").splice(i,1).write();
        return res.json({success: true});
    }
})
}

//orders functions
const getOrders = (req, res) => {
    const data = db.get("orders").value();
    return res.json(data);
}

const newOrder = (req, res) => {
    const order = req.body;

    const newOrder = {
        bookId: order.bookId,
        quantity: order.quantity,
    };

    db.get("orders").push({...newOrder, id: nanoid()}).write();
    res.json({success: true});
}

const getOrderById = (req, res) => {
    const data = db.get("orders").value();
    data.forEach(el => {
        if (req.params.id === el.id) {
        return res.json(el); 
    }
})
}

const updateOrderById = (req, res) => {
    const data = db.get("orders").value();
    const order = req.body;
    data.forEach((el,i) => {
        if (req.params.id === el.id) {
            const updated = {
                bookId: order.id || el.bookId,
                quantity: order.quantity || el.quantity,
                id: el.id
            }
            db.get("orders").splice(i,1, updated).write();
        return res.json({success: true});
    }
})
}

const deleteOrderById = (req, res) => {
    const data = db.get("order").value();
    data.forEach((el, i) => {
        if (req.params.id === el.id) {
            db.get("order").splice(i,1).write();
        return res.json({success: true});
    }
})
}

//export functions
exports.getForm = getForm;
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