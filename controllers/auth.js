require('dotenv').config();
const User = require('../models/user');


module.exports = {
    createAccount(req, res){
        let { name, email, password } = req.body;
        if(!name || !email || password == '') {
            return res.status(500).json({
                message: 'Empty field not allowed'
            });
        }
        // const isEmail = User.findOne({email: email});
        const user = User({
            name: name,
            email: email,
            password: password,
            createdAt: new Date()
        });
        user.save().then(result => {
            // console.log(result)
            return res.status(201).json({
                message: 'Account created successfully!',
                result
            })
        }).catch(err => {
            return res.status(500).json({
                message: 'Account not created!',
                err
            })
        })
    }   
};
