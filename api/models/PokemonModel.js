const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    id: {
        type: Number,
        // required: true,
    },
    name: {
        type: String,
        // required: true,
    },
    types: {
        type: Array,
        default: [],
        // required: true,
    },
    // abilities: {
    //     type: Array,
    //     default: [],
    //     // required: true,
    // },
    species: {
        name: {
            type: String,
            // required: true,
        },
        url: {
            type: String,
            // required: true,
        },
    },
    sprites: {
        type: Array,
        default: [],
        // required: true,
    },
    stats: {
        type: Array,
        default: [],
        // required: true,
    },
    height: {
        type: Number,
        // required: true,
    },
    weight: {
        type: Number,
        // required: true,
    },
}, {collection: "pokemon"});

module.exports = mongoose.model("Pokemon", pokemonSchema)
