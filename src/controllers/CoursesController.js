const api = require('../api')
const coursesService = require('../services/CoursesService')

const getCourses = async (request, response) => {
    const courses = await api.courses()

    if (Object.keys(request.query).length > 0) {
        const course = coursesService.getCourseById(request.query['courseId'], courses)
        if (course)
            response.json(course)
        else
            response.json({ "status": 404, "message": "Curso não encontrado" })
    } else
        response.json(courses)


}

module.exports = { getCourses }