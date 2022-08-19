const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);


const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);


const { getSecret } = require('./controller')

app.get("/api/secret", getSecret);

const { getCareer } = require('./controller')

app.get("/api/career", getCareer);

const {deleteCareer} = require('./controller')
app.delete("/api/career", deleteCareer);

app.listen(4000, () => console.log("Server running on 4000"));
