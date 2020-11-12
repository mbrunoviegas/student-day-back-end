const express = require('express')
const loginController = require('./controllers/LoginController')
const routes = express.Router()

routes.get('/', loginController.loginMessageTest)

module.exports = routes