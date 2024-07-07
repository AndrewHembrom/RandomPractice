const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors(),express.json());

app.get("/sum", function (req, res) { 
    const firstNum = parseInt(req.query.firstNum);
    const secNum = parseInt(req.query.secNum);
    const sum = firstNum + secNum;
    res.send(sum.toString());
})

app.get("/interest", function (req, res) { 
    const p = parseInt(req.query.principal);
    const r = parseInt(req.query.rate);
    const t = parseInt(req.query.time);
    const interest = (p * r * t) / 100; 
    const total = p + interest;
    res.json({
        "interest": interest,
        "total": total
    });
})

app.listen(3000);
