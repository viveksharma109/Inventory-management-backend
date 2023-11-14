const customer = require("../model/customer");

async function TotalCustomers (){
    try {
        console.log(" check 1.1");
        const totalcustomers = await customer.find();
        return totalcustomers;

    } catch (err){
        console.log("check 1.2")
        return null;
    }

}

module.exports = TotalCustomers;