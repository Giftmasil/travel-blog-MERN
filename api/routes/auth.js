const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

//REGISTER
router.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try{
        const newUser = new User({
            ...req.body,
            password: hashedPassword
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("User not found")
        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong password")
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router