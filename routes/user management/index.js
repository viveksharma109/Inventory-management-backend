const express = require('express');
const user = require('./registerUser');
const userfind = require('./Login');
const product = require("./products");
const getProducts = require("./getProducts");
const order = require("./order")
const orderSummaryData = require("./ordersummary");
const dashboard = require("./dashboard");
const router = express.Router();



// const { verifyUser } = require('../../middleware/index');

router.use('/users/register', user);
router.use('/user/login',  userfind);
router.use('/products',product);
router.use('/get-products', getProducts);
router.use('/order', order);
router.use("/ordersummary",orderSummaryData);
router.use("/dashboard",dashboard);

module.exports = router;
