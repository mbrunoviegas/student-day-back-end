const express = require('express')
const loginController = require('./controllers/LoginController')
const collegesController = require('./controllers/CollegesController')
const coursesController = require('./controllers/CoursesController')
const profileController = require('./controllers/ProfileController')
const subjectsControlles = require('./controllers/SubjectsControlles')
const routes = express.Router()

routes.get('/', loginController.tryToLogin)
routes.get('/profile', profileController.getStudentProfile) 
routes.get('/colleges', collegesController.getColleges) 
routes.get('/courses', coursesController.getCourses) 
routes.get('/subjects', subjectsControlles.getSubjects) 


module.exports = routes