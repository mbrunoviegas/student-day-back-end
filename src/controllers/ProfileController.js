const api = require('../api')
const profileService = require('../services/ProfileService')

const getStudentProfile = async (request, response) => {
    const users = await api.users()

    if (Object.keys(request.query).length > 0) {
        const student = users.find(student => student.login === request.query['login'])
        if (student) {
            const profile = await profileService.getFullProfile(student)
            return response.json(profile)
        } else {
            return response.json({ "status": 404, "message": "Usuario não encontrado" })
        }
    } else {
        return response.json({ "status": 400, "message": "Internal Server Error" })
    }
}

module.exports = { getStudentProfile }