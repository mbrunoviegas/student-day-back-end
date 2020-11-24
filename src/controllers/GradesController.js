const { request } = require('express')
const api = require('../api')
const gradesService = require('../services/GradesService')

const getGrades = async (request, response) => {
    if (Object.keys(request.query).length > 0) {
        const grades = await api.grades()
        console.log(grades)
        const userGrades = gradesService.filterGrades(grades, request.query['userId'])
        if (userGrades)
            response.json(userGrades)
        else
            response.status(404).json("Não existem notas para você.")
    } else {
        response.status(400).json("Informações inválidas. Atualize a página.")
    }
}

module.exports = { getGrades }