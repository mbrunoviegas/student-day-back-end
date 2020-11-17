const api = require('../api')
const collegesService = require('../services/CollegesService')

const getColleges = async (request, response) => {
    const colleges = await api.colleges()

    if (Object.keys(request.query).length > 0) {
        const college = collegesService.getCollegeById(request.query['collegeId'], colleges)
        if (college)
            response.json(college)
        else
            response.json({ "status": 404, "message": "Faculdade não encontrado" })
    }
    else
        response.json(colleges)

}

module.exports = { getColleges }