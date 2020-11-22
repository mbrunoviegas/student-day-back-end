const api = require('../api')
const profileService = require('../services/ProfileService')

const getStudentProfile = async (request, response) => {
    const users = await api.users()

    if (Object.keys(request.query).length > 0) {
        const student = users.find(student => student.userId === request.query['userId'])
        if (student) {
            const profile = await profileService.getFullProfile(student)
            return response.json(profile)
        } else {
            return response.status(404).json({ error: "Usuario não encontrado" })
        }
    } else {
        return response.status(400).json({ error: "Informe o ID do Usuário" })
    }
}

module.exports = { getStudentProfile }