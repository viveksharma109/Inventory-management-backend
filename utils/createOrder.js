const ordergenerated = require("../model/oredergenerated");

async function createOrder(grandTotal) {
    try {
        const oredergenerates = new ordergenerated({
            grandtotal: parseInt(grandTotal)
        });

        await oredergenerates.save();
        return true;
    }
    catch (err) {
        console.log("Error while creating new order");
        return false;
    }
};

module.exports = createOrder;