const product = require("../model/product");

async function getproducts(args = null) {
    try {
        if (args) {
            const producttable = await product.findOne(args);
            return producttable
        } else {
            const producttable = await product.find();
            return producttable;
        }

    } catch (err) {
        // find
        return null;
    }
}

async function updateProducts(barcode, field) {
    await product.findOneAndUpdate({ barcode: barcode }, field);
}

async function updateQuantity(barcode, quantity) {
    const currProduct = await getproducts({ barcode: barcode });
    const currQuantity = currProduct.quantity;
    const quantityDiff = currQuantity - quantity;
    await updateProducts(barcode, { quantity: quantityDiff });
}

async function updateMultiProductQuantity(quantities) {
    try {
        for (let [barcode, quantity] of Object.entries(quantities)) {
            await updateQuantity(barcode, quantity);
        }
        return true;
    }
    catch (err) {
        console.log("Error while updating the quantities in the product");
        return false;
    }
}


module.exports = {getproducts, updateMultiProductQuantity};
