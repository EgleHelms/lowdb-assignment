//import packages
const express = require("express");

//import files
const books = require("./routes/books");
const users = require("./routes/users");

//setup server
const hostname = "127.0.0.1";
const port = process.env.PORT || 1337;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))

//endpoints
app.get("/", (req,res)=>{
    res.sendFile("index.html")
})

app.use("/books", books);
app.use("/users", users);


app.listen(port, hostname, ()=> {console.log(`Listening on http://${hostname}:${port}.`)})