const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router
.route("/")
.get((req,res)=> controller.getBooks(req,res));

router
.route("/new")
.get((req, res) => controller.getForm(req, res));

router
.route("/new")
.post((req, res) => controller.addBook(req, res));

module.exports = router;
