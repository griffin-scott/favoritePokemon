const mongoose = require("mongoose")

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
    const pokemon = pkmnJson
    response.send(pokemon)
});

router.get("/pokemon/:id", async (request, response) => {
    const data = pkmnJson[request.params.id]

    response.send(JSON.stringify(data))
});


module.exports = router
