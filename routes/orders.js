const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router
.route("/")
.get((req, res) => controller.getOrders(req, res));

router
.route("/")
.post((req, res) => controller.newOrder(req, res));

router
.route("/:id")
.get((req, res) => controller.getOrderById(req, res));

router
.route("/:id")
.put((req, res) => controller.updateOrderById(req, res));

router
.route("/:id")
.delete((req, res) => controller.deleteOrderById(req, res));

module.exports = router;