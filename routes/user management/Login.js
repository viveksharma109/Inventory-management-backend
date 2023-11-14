const express = require('express');
const user = require('../../model/user');
const router = express.Router();
const generateJWT = require('../../utils/generateToken');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => { 
    const { UsrerName, Password } = req.body; 
    try {
        const findUser = await user.findOne({ username: UsrerName }); 
        if (findUser) {
            const storedHashedPassword = findUser.password;
            bcrypt.compare(Password, storedHashedPassword, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        data: null,
                        err: err,
                        message: "Internal server error"
                    });
                } else if (result) {
                    console.log("Passwords match");
                    const token = generateJWT(UsrerName, Password);
                    console.log('Generated JWT:', token);
                    res.status(200).json({
                        data: [result, token],
                        err: null,
                        message: "User is logged in"
                    });
                } else {
                    console.log("Passwords do not match");
                    res.status(401).json({
                        data: null,
                        err: "Invalid credentials",
                        message: "Authentication failed"
                    });
                }
            });
        } else {
            console.log("User not found");
            res.status(404).json({
                data: null,
                err: "User not found",
                message: "User does not exist"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            data: null,
            err: err,
            message: "Internal server error"
        });
    }
});

module.exports = router;
