const pkmnJson = require('./data/pokemon-details.json');

let express = require("express"),
router = express.Router();


router.get("/status", (request, response) => {
    const status = {
        status: "status all good",
    };
    response.send(status);
});

router.get("/pokemon", async (request, response) => {
    // const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1292')
    // const data = await res.json()

    const pokemon = pkmnJson
    response.send(pokemon)
});

router.get("/pokemon/:id", async (request, response) => {
    // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${request.params.id}`)
    // const data = await res.json()
    const data = pkmnJson[request.params.id]

    const pokeTypes = []
    const pokeStats = []

    for (t of data.types){
        pokeTypes.push(t.type.name)
    }

    for (s of data.stats){
        pokeStats.push(s.base_stat)
    }

    const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        species: data.species,
        height: data.height,
        weight: data.weight,
        stats: pokeStats,
        types: pokeTypes
    }

    response.send(JSON.stringify(pokemon))
});


module.exports = router
