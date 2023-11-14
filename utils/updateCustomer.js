const customer = require("../model/customer");

async function updateCustomer(UserName, userPhoneNumber) {
    try {
        userPhoneNumber = parseInt(userPhoneNumber);

        const customerData = new customer({
            userName: UserName,
            userPhoneNumber: userPhoneNumber,
        });

        await customerData.save();
        return true;
    }
    catch (err) {
        console.log("Getting error while saving the customer");
        return false;
    }
}

module.exports = updateCustomer;