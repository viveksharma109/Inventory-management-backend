const express = require('express');
const router = express.Router();
const Customer = require("../../model/customer");
const Totalschema = require("../../model/totalsales");
const Ordergenerated = require("../../model/oredergenerated");
const Product = require("../../model/product");
const { updateMultiProductQuantity } = require('../../utils/products');
const updateCustomer = require('../../utils/updateCustomer');
const updateGrandTotal = require('../../utils/updateGrandTotal');
const createOrder = require('../../utils/createOrder');



router.post('/', async (req, res) => {
    const { UserName, UserPhoneNumber, GrandTotal , Quantity} = req.body;
    try {
        // adding the customer details.
        const isCustomerUpdated = await updateCustomer(UserName, UserPhoneNumber);
        if (!isCustomerUpdated) {
            throw Error("Unable to add new customer");
        }

        // adding or updating the grand total.
        const isGrandTotalUpdated = await updateGrandTotal(GrandTotal);
        if (!isGrandTotalUpdated) {
            throw Error("Unable to update or add grand total");
        }

        // creating new order.
        const isOrderCreated = await createOrder(GrandTotal);
        if (!isOrderCreated) {
            throw Error("Unable to create order");
        }

        // updating the quantities.
        const isQuantityUpdated = await updateMultiProductQuantity(Quantity);
        if (!isQuantityUpdated) {
            throw Error("Unable to update the quantities");
        }

        res.status(200).json({
            data: [],
            err: null,
            message: "User is created"
        });
    } catch (err) {
        res.status(400).json({
            data: [],
            err: err.message,
            message: "User not created"
        });
    }
});

module.exports = router;
