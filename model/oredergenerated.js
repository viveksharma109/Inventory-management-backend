const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const ordergeneratedSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: uuidv4(),
    },
    grandtotal: {
        type: Number, 
        required: true,
    }
});

module.exports = mongoose.model('Ordergenerated', ordergeneratedSchema);
