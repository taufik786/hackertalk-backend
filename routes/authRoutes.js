const router = require('express').Router();

const authController = require('../controllers/auth')

router.post('/register',authController.createAccount);

module.exports = router