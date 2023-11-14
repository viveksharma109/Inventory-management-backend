const express = require('express');
const router = express.Router();
const Product = require("../../model/product");

router.get('/:barcode', async (req, res) => {
    const barcode = req.params.barcode;

    try {
        console.log("Request received for barcode:", barcode);

        const productBarcode = await Product.findOne({ barcode });

        if (productBarcode) {
            res.status(200).json({
                data: [productBarcode],
                err: null,
                message: "Barcode found"
            });
        } else {
            res.status(404).json({
                data: [],
                err: null,
                message: "Product not found"
            });
        }
    } catch (err) {
        console.error("Error while processing barcode request:", err);
        res.status(500).json({
            data: [],
            err: err,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
