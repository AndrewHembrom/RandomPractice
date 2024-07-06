const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:Andrew2003@cluster0.hbdysqz.mongodb.net/userappnew")

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const user1 = new User({
    name: "Andrew",
    username: "Bruh",
    password: "123456",
})

user1.save();