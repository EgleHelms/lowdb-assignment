const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router
.route("/")
.get((req, res) => controller.getUsers(req, res));

router
.route("/")
.post((req, res) => controller.newUser(req, res));

router
.route("/:id")
.get((req, res) => controller.getUserById(req, res));

router
.route("/:id")
.put((req, res) => controller.updateUserById(req, res));

router
.route("/:id")
.delete((req, res) => controller.deleteUserById(req, res));

module.exports = router;