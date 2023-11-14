const Totalschema = require("../model/totalsales");

const today = new Date();
const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

async function updateGrandTotal(grandtotal) {
    try {
        const existingData = await Totalschema.findOne({
            todayDate: { $gte: startOfDay, $lte: endOfDay }
        });
        grandtotal = parseInt(grandtotal);
        if (existingData) {
            existingData.grandtotal = grandtotal + existingData.grandtotal;
            await existingData.save();
        } else {
            grandtotal  = parseInt(grandtotal);
            const grandtotaldata = new Totalschema({
                grandtotal: grandtotal,
                todayDate: today
            });
            await grandtotaldata.save();
        };
        return true;
    }
    catch (err) {
        console.log("Error while updating the grand total");
        return false;
    }
};

module.exports = updateGrandTotal;