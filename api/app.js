const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./old_routes.js')

const app = express();

app.use(cors());

dotenv.config({path: '.env.development'});
// dotenv.config();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

let routes = require("./routes.js");
app.use("/api", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
    // console.log(`node_env: ${process.env.NODE_ENV}`)
    // console.log(`node_env: ${process.env.ATLAS_URI}\n`)
});
