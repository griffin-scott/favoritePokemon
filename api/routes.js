const express = require("express")
const router = express.Router();

router.get("/status", (req, res) => {
    const status = {
        status: "status all good",
    };
    res.send(status);
});


/* ---------------- MONGODB REQUESTS ---------------- */

/* --------- GET ALL --------- */
router.get("/pokemon", async (req, res) => {
    let query = await Pokemon.find({})

    res.send(query)
});

/* --------- GET ONE --------- */
router.get("/pokemon/:id", async (req, res) => {
    let poke_id = req.params.id;

    let query = await Details.findOne({id: poke_id})
    res.send(query)
});

/* --------- POST ONE --------- */
router.post("/pokemon", (req, res) => {
    const detailsList = pDetails

    for (let p of detailsList){
        const statsArr = p.stats.map((s) => s['base_stat'])
        const typesArr = p.types.map((t) => t.type.name)
        const abilitiesArr = p.abilities.map((a) => a.ability.name)
        const spritesArr = [
            p.sprites.other['official-artwork']['front_default'],
            p.sprites.other.showdown['front_default']
        ]
        const speciesObj = {
            name: p.species.name,
            url: p.species.url
        }

        let details = new Details({
            id: p.id,
            abilities: abilitiesArr,
            base_experience: p.base_experience,
            name: p.name,
            types: typesArr,
            species: speciesObj,
            sprites: spritesArr,
            stats: statsArr,
            height: p.height,
            weight: p.weight
        })

        details.save().then(
            (err) => console.error(err)
        );
    }


    res.send(":)")
});


module.exports = router
