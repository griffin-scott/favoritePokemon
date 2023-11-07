const express = require('express')
const app = express();

const cors = require("cors")
    app.use(cors())

app.use(express.json());

let routes = require('./routes');
app.use('/api', routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
