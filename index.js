const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const DB = require('./connect.js');
const tournament= require("./routers/tournamentroute.js");
const participant = require("./routers/participantroute.js");
dotenv.config();

DB.connect();
const app = express();
app.use(cors());
app.use(express.json());
 
app.use("/api/tournament",tournament);
app.use("/api/participant",participant);


app.listen(5000);