const { request } = require('express')
const api = require('../api')
const loginService = require('../services/LoginService')

//TODO mudar sistema de login para senha criptografada

const tryToLogin = async (request, response) => {
    if (Object.keys(request.query).length == 2) {
        const users = await api.users()
        const userId = loginService.verifyUser(request.query, users)
        if (userId)
            return response.json(userId)
        else
            return response.json({ "status": 404, "message": "Login ou ID inválidos" })
    } else {
        return response.json({ "status": 400, "message": "ID inválido" })
    }
}

module.exports = {
    tryToLogin
}