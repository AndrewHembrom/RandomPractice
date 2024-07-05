const express = require('express');
const z = require('zod');

const app = express();
const schema = z.array(z.number());

app.use(express.json());

function userMiddleware(req, res, next) { 
    const username = req.headers.username;
    const password = req.headers.password;
    if (!(username === "andrew2003" && password === "123456")) {
        res.status(403).json({
            "msg": "Wrong Input"
        });
    } else { 
        next();
    }
}

function kidneyMiddleware(req, res, next) { 
    const kidneyId = req.query.kidneyId;

    if (!(kidneyId == 1 || kidneyId == 2)) {
        res.status(403).json({
            "msg": "Wrong Input"
        });
    } else { 
        next();
    }
}

app.use(express.json(),userMiddleware, kidneyMiddleware)

app.get('/health-checkup', function (req, res) { 
    res.json({
        msg: "Your kidney is working fine"
    })
})

app.post("/health-checkup", function(req, res){
	const kidneys = req.body.kidneys;
	const response = schema.safeParse(kidneys);
	res.send({
		response
	})
});

//global catch
app.use(function (err, req, res, next){ 
    res.json({
        msg: "Something is Wrong with the Server"
    })
})

app.listen(3000);
