const express = require("express");
const router = express.Router();
const {nanoid} = require("nanoid");

router
.route("/")
.get((req, res) => {
    res.send("GET /users")
})
.post((req, res) => {
    res.send("POST /users")
});

router
.route("/:userid")
.get((req, res) => {
    res.send("GET /users/" + req.params.userid)
})
.put((req, res) => {
    res.send("PUT /users/" + req.params.userid)
});

module.exports = router;