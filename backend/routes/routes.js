const express = require('express')
const register = require('../controllers/usersignup')

const app = express.Router()





app.post('/registration', register)





module.exports = app