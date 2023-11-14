const mongoose = require('mongoose');

const totalsalesSchema = new mongoose.Schema({
    grandtotal :{
        type : Number,
    },
    todayDate: {
        type: Date  
    }

});

module.exports = mongoose.model('Totalschema',totalsalesSchema );