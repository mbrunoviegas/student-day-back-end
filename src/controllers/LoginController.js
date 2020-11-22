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
            return response.status(404).json({ error: "Login ou ID inválidos" })
    } else {
        return response.status(400).json({ error: "Informações inválidas" })
    }
}

module.exports = {
    tryToLogin
}