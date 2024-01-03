const pkmnJson = require('./data/pokemon-details.json');
// const db = require('./db/conn.mjs')
// import db from './db/conn.mjs'

let express = require("express"),
router = express.Router();


router.get("/status", (req, res) => {
    const status = {
        status: "status all good",
    };
    res.send(status);
});

/* ------------------------ Local DB requests ------------------------ */

/* ---------------- GET ---------------- */

router.get("/pokemon", async (req, res) => {
    const data = pkmnJson
    res.send(data)
});

router.get("/pokemon/:id", async (req, res) => {
    const data = pkmnJson[req.params.id]

    res.send(JSON.stringify(data))
});




/* ------------------------- MongoDB requests ------------------------- */

/* ---------------- GET ---------------- */

router.get("test", async (req, res) => {
    let collection = await db.collection("pokemon");
    let results = await collection.find({})
    .limit(5)
    .toArray();
    res.send(results)
});



/* ---------------- POST ---------------- */

router.post("/db/pokemon", async (req, res) => {

});


module.exports = router
// export default router
