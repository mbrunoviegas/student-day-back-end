const api = require('../api')
const profileService = require('../services/ProfileService')

const getStudentProfile = async (request, response) => {
    const users = await api.users()

    if (Object.keys(request.query).length > 0) {
        const student = users.find(student => student.userId === request.query['userId'])
        if (student) {
            const profile = await profileService.getFullProfile(student)
            return response.json({ "status": 200, "response": profile })
        } else {
            return response.json({ "status": 404, "message": "Usuario não encontrado" })
        }
    } else {
        return response.json({ "status": 400, "message": "Informe o ID do Usuário" })
    }
}

module.exports = { getStudentProfile }