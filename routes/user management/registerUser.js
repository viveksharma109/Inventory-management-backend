const express = require('express');
const user = require('../../model/user')
const router = express.Router();
const generateJWT = require('../../utils/generateToken');
const hash = require('../../utils/hashcreate')

router.post('/', async (req, res) => {
    const { UsrerName,  Email, Password } = req.body;
    try {
        const hashcreate = await hash(Password)
        const newUser = new user({
            username: UsrerName,
            email: Email ,
            password: hashcreate,
        });
        const username = UsrerName;
        const email = Email;
        const token = generateJWT(username, email);
        console.log('Generated JWT:', token);
        await newUser.save();
        res.status(201).json({
            data: token,
            err: null,
            message: "user is login"
        })
    } catch (err) {
        res.status(500).json({
            data: [],
            err: err,
            message: "can't find"
        });

    }
});
module.exports = router;