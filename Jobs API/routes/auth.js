const express = require('express')
const router = express.Router();

const { login, register } = require('../controllers/auth');
const { route } = require('express/lib/router');

router.post('/register', register)
router.post('/login', login)

module.exports = router