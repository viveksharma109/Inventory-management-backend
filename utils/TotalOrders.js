const oredergenerated = require("../model/oredergenerated");

async function TotalOrders (){
    try {
        const totalOrder = await oredergenerated.find();
        console.log("chek 1.1");
        return totalOrder;

    } catch(err){
        console.log("chek 1.2");

        return null;
    }
};



module.exports =  TotalOrders;