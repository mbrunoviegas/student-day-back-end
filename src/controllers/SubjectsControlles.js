const api = require('../api')
const subjectsService = require('../services/SubjectsService')

const getSubjects = async (request, response) => {
    const subjects = await api.subjects()

    if (Object.keys(request.query).length > 0) {
        const subject = subjectsService.getSubjectById(request.query['subjectId'], subjects)
        if (subject)
            response.json(subject)
        else
            response.json({ "status": 404, "message": "Disciplina não encontrada" })
    }
    else
        response.json(subjects)

}

module.exports = { getSubjects }