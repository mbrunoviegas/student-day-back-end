const { request } = require('express')
const api = require('../api')
const gradesService = require('../services/GradesService')

const getGrades = async (request, response) => {
    if (Object.keys(request.query).length > 0) {
        const grades = await api.grades()
        const subjects = await api.subjects()
        const userGrades = gradesService.filterGrades(grades, request.query['userId'], subjects)
        if (userGrades)
            response.json(userGrades)
        else
            response.status(404).json("Não existem notas para você.")
    } else {
        response.status(400).json("Informações inválidas. Atualize a página.")
    }
}

const insertGrade = async (request, response) => {
    console.log("aqui")
    const { grade } = request.body
    console.log(grade)
    if (grade) {
        const grades = await api.grades()
        grades.push(grade)
        api.saveGrades(grades)
        response.status(200).json("OK")
    } else
        response.status(400).json("Error ao inserir nova nota")
}

module.exports = { getGrades, insertGrade }