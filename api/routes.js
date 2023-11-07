let express = require("express"),
router = express.Router();

router.get("/status", (request, response) => {
    const status = {
        status: "status all good",
    };
    response.send(status);
});


module.exports = router
