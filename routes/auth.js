const express = require("express");
const router = new express.Router();
const bcrypt = require('bcrypt')
const User = require('./../models/User')


router.get("/signup", (req, res) => {
    res.render("signup")
})

router.post("/signup", async (req, res) => {
    console.log("HEY");
    try {
        const newUser = { ...req.body }
        const userFound = await User.findOne({email : newUser.email})
        if (userFound) {
            req.flash("error", "Invalid credentials");
            res.redirect("/auth/signin");
        } else {
            const hashedPassword = bcrypt.hashSync(newUser.password, 10);
            newUser.password = hashedPassword;
            console.log(newUser);
            await User.create(newUser);
            req.flash("success", "Congrats ! You are now registered !");
            res.redirect("/auth/signin");
        }
    } catch(err) {
        console.log(err);
    }
});

router.get('/signin', async (req, res) => {
    try {
        res.render('signin');
    } catch(err) {
        console.log(err);
    }
})

router.post('/signin', async (req, res) => {
    
    try {
        const {email, password} = req.body;
        const foundUser = await User.findOne({email: email})
        console.log(req.body)
        console.log(foundUser)
        if (!foundUser) {
            req.flash("error", "Invalid credentials");
            res.redirect("/auth/signin");
        } else {
            const isSamePassword = bcrypt.compareSync(password, foundUser.password);
            if (!isSamePassword) {
                console.log("hey")
                req.flash("error", "Invalid credentials");
                res.redirect("/auth/signin");
            } else {
                const userObject = foundUser.toObject();
                delete userObject.password;
                req.session.currentUser = userObject;
                req.flash("success", "you're logged in");
                res.redirect("/prod-manage");

            }
        }
    } catch(err) {
        console.log(err);
    }
})
module.exports = router;
