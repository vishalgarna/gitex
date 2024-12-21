const { client2, db1 } = require("../config/db.config");
const mongoose = require('mongoose');

const importanSchema = mongoose.Schema({
    timeframe: { type: String },
    orderDetails: {
        symbol: { type: String },
        type: { type: String },
        sl: { type: String },
        tp: { type: String },

    }
})

const Importantmodel = db1.model('importantmodel', importanSchema);
module.exports = { Importantmodel };