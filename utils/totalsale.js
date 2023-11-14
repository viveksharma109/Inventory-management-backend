const Totalschema = require("../model/totalsales");


async function TotalSales (){
    try {
        const totalSales  = await Totalschema.find();
        console.log("chek 1.1");

        return totalSales;

    } catch (err){
        console.log("chek 1.2");

        return null;
    }

}

module.exports = TotalSales;