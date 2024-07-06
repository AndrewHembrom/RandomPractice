const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = "123456";
const z = require('zod');

mongoose.connect("mongodb+srv://admin:Andrew2003@cluster0.hbdysqz.mongodb.net/userappnew");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

const app = express();
app.use(express.json());

async function userExists(email) { 
    const user = await User.findOne({ email: email });
    return user !== null;
}

function validateInput(obj){ 
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
    return response;

}

app.post('/signup', async function (req, res) { 
    const inputs = req.body;
    const response = validateInput(inputs);

    if (!response.success) { 
        return res.json({
            "msg": "Wrong Inputs"
        });
    } else {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userPassword = req.body.password;

        if (await userExists(userEmail)) {
            return res.json({
                "msg":"User already exits. Go to SignIn."
            })
        }

        const user = new User({
            name: userName,
            email: userEmail,
            password: userPassword,
        });

        await user.save();
        var token = jwt.sign({ email: userEmail}, jwtPassword);
        return res.json({
            "msg":"User added to the database.",
            token,
        });
    }
})

// app.post('/signin', function (req, res) {
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     if (!userExists(userEmail)) { 
//         res.json({
//             "msg":"User does not exist. Go to SignUp."
//         })
//     }

//     var token = jwt.sign({ email: userEmail }, jwtPassword);
//     return res.json({
//         "msg":"User added to the database.",
//         token,
//     });

//     // Call app.get for /users page after this.
    
// })

// app.get('/users', function (req, res) { 

// })

app.listen(3000);
