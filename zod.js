const express = require('express');
const z = require('zod');

const app = express();

app.use(express.json());

function validateInput(obj){ 
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
    return response;

}

app.post('/', function (req, res) { 
    const inputs = req.body;
    const response = validateInput(inputs);

    if (!response.success) { 
        res.json({
            "msg": "Wrong Inputs"
        })
    } else {
        res.json({
            "msg":"Correct Inputs"
        })
    }
})

app.listen(3000);