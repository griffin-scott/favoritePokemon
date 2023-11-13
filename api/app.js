const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

let routes = require("./routes");
app.use("/api", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
    console.log(`node_env: ${process.env.NODE_ENV}`)
});
