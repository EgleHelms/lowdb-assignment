//import packages
const express = require("express");
const morgan = require("morgan");
const setCors = require("./middleware/security");

//import files
const books = require("./routes/books");
const users = require("./routes/users");
const orders = require("./routes/orders");

//setup server
const hostname = "127.0.0.1";
const port = process.env.PORT || 1337;
const app = express();

app.use((req, res, next) => {
    setCors(req, res, next)
});

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))

//endpoints
app.get("/", (req,res)=>{
    res.sendFile("index.html")
})

//routes
app.use("/books", books);
app.use("/users", users);
app.use("/orders", orders);


//error handling for non-existant pages
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;            
    next(error);
})

//other errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message 
        }
    })
})

app.listen(port, hostname, ()=> {console.log(`Listening on http://${hostname}:${port}.`)})
