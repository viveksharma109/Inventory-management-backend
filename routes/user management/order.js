const express = require('express');
const router = express.Router();
const Product = require('../../model/product');

router.get('/:barcode', async (req, res) => {
    const barcode = req.params.barcode;

    try {
        const product = await Product.findOne({ barcode });

        if (product) {
            res.status(200).json({
                data: [product],
                error: null,
                message: "Barcode matched"
            });
        } else {
            res.status(404).json({
                data: [],
                error: null,
                message: "Barcode not found"
            });
        }
    } catch (error) {
        console.error(error);

        res.status(500).json({
            data: [],
            error: "Internal Server Error",
            message: "Something went wrong while processing the barcode request"
        });
    }
});

module.exports = router;
