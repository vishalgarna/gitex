const { client2, db1 } = require("../config/db.config");
const mongoose = require('mongoose');

// Define Strategy Schema
const strategySchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    strategyName: { type: String },
    timeframe: { type: String },
    description: { type: String },
    deployed: { type: Boolean },
    indicators: [{
        indicatorId: { type: String },
        type: { type: String },
        parameters: { type: Object, of: mongoose.Schema.Types.Mixed }
    }],
    entryRuleModel: [{ // Entry conditions
        indicatorId: { type: String },
        condition: { type: String },
        value: { type: mongoose.Schema.Types.Mixed },
        action: { type: String },

        // logical_operator: { type: String }

    }],
    exitRuleModel: [{
        // Exit conditions
        indicatorId: { type: String },
        condition: { type: String },
        value: { type: mongoose.Schema.Types.Mixed },
        action: { type: String },
        // logical_operator: { type: String }
    }],
    orderDetails: {
        orderType: { type: String },
        symbol: { type: String },
        volume: { type: Number },
        StopLoss: { type: Number },
        TakeProfit: { type: Number }
    }
}, { timestamps: true });

const StrategiesModel = db1.model('strategies', strategySchema);
module.exports = { StrategiesModel };
