const express = require('express')
const loginController = require('./controllers/LoginController')
const collegeController = require('./controllers/CollegeController')
const courseController = require('./controllers/CourseController')
const profileController = require('./controllers/ProfileController')
const routes = express.Router()

routes.get('/', loginController.loginMessageTest)
routes.get('/profile', profileController.getStudentProfile)
routes.get('/course', loginController.loginMessageTest) //TODO mudar para  courseControler
routes.get('/college', loginController.loginMessageTest) //TODO mudar para  collegeControler
routes.get('/subject', loginController.loginMessageTest) //TODO mudar para  subjectController

module.exports = routes