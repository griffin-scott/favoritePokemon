let express = require("express"),
router = express.Router();

router.get("/status", (request, response) => {
    const status = {
        status: "status all good",
    };
    response.send(status);
});

router.get("/pokemon", async (request, response) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1292')
    const data = await res.json()
    const pokemon = data.results
    response.send(pokemon)
});

router.get("/pokemon/:id", async (request, response) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${request.params.id}`)
    const data = await res.json()

    const pokeTypes = []

    for (t of data.types){
        pokeTypes.push(t.type.name)
    }

    const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: pokeTypes
    }

    response.send(JSON.stringify(pokemon))
});


module.exports = router
