const api = require('../api')
const profileFactory = require('../factories/ProfileFactory')

const getFullProfile = async (student) => {
    const colleges = await api.colleges()
    const courses = await api.courses()
    const subjects = await api.subjects()

    return profileFactory.buildFullProfile(student, colleges, courses, subjects)
}


module.exports = { getFullProfile }