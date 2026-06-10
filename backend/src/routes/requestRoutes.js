const express = require("express");
const router = express.Router();

const{
    sendRequest,
} = require("../controllers/requestController");

router.post("/",sendRequest);
module.exports= router;