const express = require('express');
const router = express.Router();
const {getproducts} = require('../../utils/products');
const TotalCustomers = require("../../utils/totalcustomers");
const TotalSales = require('../../utils/totalsale');
const TotalOrders = require('../../utils/TotalOrders');

router.get('/', async (req, res) => { 
    try {
        const products = await getproducts();
        const orders = await  TotalOrders();
        const customers  = await TotalCustomers();
        const sales = await TotalSales() ; 


        const data = {
            products: products,
            totalProducts: products.length,
            orders:orders,
            totalorders : orders.length,
            customers: customers,
            totalcustomers:customers.length,
            sales:sales,
            totalsales:sales.length
        }; 

        res.status(200).json({
            data: data,
            error: null,
            message: "Data found"
        });
    }
    catch(err){
        console.log("check 4");

        res.status(400).json({
            data:[],
            err :err,
            message:"data not found !"
        })

    }
});

module.exports = router;
