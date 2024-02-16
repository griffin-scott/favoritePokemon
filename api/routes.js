const express = require("express")
const dotenv = require("dotenv")
require("dotenv").config();
const mongoose = require("mongoose")
const router = express.Router();

dotenv.config({path: '.env.development'});

router.get("/status", (req, res) => {
    const status = {
        status: "status all good",
    };
    res.send(status);
});


/* ---------------- MONGODB REQUESTS ---------------- */

mongoose.connect(process.env.MONGODB_URI)
const Pokemon = require('./models/PokemonModel')

/* --------- GET ALL --------- */
router.get("/pokemon", async (req, res) => {
    let query = await Pokemon.find({})

    res.send(query)
});

/* --------- GET ONE --------- */
router.get("/pokemon/:id", async (req, res) => {
    let poke_id = req.params.id;

    let query = await Pokemon.findOne({id: poke_id})
    res.send(query)
});

/* --------- POST ONE --------- */
router.post("/pokemon", async (req, res) => {

    const p = req.body
    // Should account for error if type ARRAY or OBJ is passed in

    let pokemon = new Pokemon({
        id: p.id,
        name: p.name,
        types: p.types,
        species: p.species,
        sprites: p.sprites,
        stats: p.stats,
        height: p.height,
        weight: p.weight
    })

    await pokemon.save().then(
        (err) => console.error(err),
    );


    res.send("Post Successful")
});


module.exports = router
