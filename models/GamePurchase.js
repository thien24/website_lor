// models/GamePurchase.js
const mongoose = require('mongoose');

const gamePurchaseSchema = new mongoose.Schema({
    gameName: { type: String, required: true },
    purchaseDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GameBought', gamePurchaseSchema);
