const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/request", async (req, res) =>{
    const {method, url, body} = req.body;

    const start = Date.now();

    try{
        const response = await axios({
            method, url, data:body,
        });

        const end = Date.now();

        res.json({
            success: true,
            status: response.status,
            time: end - start,
            data: response.data,
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});