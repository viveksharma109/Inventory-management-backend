const express = require('express');
const router = express.Router();
const Product = require("../../model/product")

router.post('/', async (req, res) => {
    const { Name, Description, Price, Quantity, Category, Barcode, Expiry } = req.body;
    try {
        const data = await Product.findOne({barcode:Barcode});
        let response ;
        if(data){
                response = await Product.updateOne({ barcode: Barcode }, {
                name: Name,
                description: Description,
                price: Price,
                quantity: Quantity,
                category: Category,
                barcode: Barcode,
                expiry: Expiry
            });
            response = await Product.findOne({barcode:Barcode});

        } else {
                response = new Product({
                name: Name,
                description: Description,
                price: Price,
                quantity: Quantity,
                category: Category,
                barcode: Barcode,
                expiry: Expiry
            })
            await response.save();
        };
        res.status(201).json({
            data: response,
            err: null,
            message: "product is created"
        });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({
            data: [],
            err: err,
            message: "can't create"
        });
    }
});

module.exports = router;