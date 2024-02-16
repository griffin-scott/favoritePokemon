const mongoose = require("mongoose");

const evolutionSchema = new mongoose.Schema({
    chain: {
        type: Array
    }
}, {collection: "evolution_chains"});

module.exports = mongoose.model("Evolution", evolutionSchema)
