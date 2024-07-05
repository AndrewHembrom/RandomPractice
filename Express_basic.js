// function calculateSum(n) { 
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// let ans = calculateSum(10);
// console.log(ans);

// const express = require("express");

// function calculateSum(n) { 
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// const app = express();

// app.get("/", function (req, res) { 
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })

// app.listen(3000);

const express = require('express');

const app = express();

app.use(express.json());

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get("/", function (req, res) { 
    const userKidneys = users[0].kidneys;
    const numOfKidneys = userKidneys.length;
    let healthyKidneys = 0;
    for (let i = 0; i < numOfKidneys; i++){ 
        if (userKidneys[i].healthy) { 
            healthyKidneys += 1;
        }
    }
    const unhealthyKidneys = numOfKidneys - healthyKidneys;
    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post("/", function (req, res) { 
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function (req, res) { 
    for (let i = 0; i < numOfKidneys; i++) { 
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res) { 
    const newKidneys = [];
    for (let i = 0; i < numOfKidneys; i++) { 
        if (users[0].kidneys[i].healthy) { 
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "Deleted unhealthy kidneys"
    })
})

app.listen(3000);