const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/tarifas", require("./routes/tarifa.js"));

const PORT = 5555

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


