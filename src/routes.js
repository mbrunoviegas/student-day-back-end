const express = require('express')
const loginController = require('./controllers/LoginController')
const collegesController = require('./controllers/CollegesController')
const coursesController = require('./controllers/CoursesController')
const profileController = require('./controllers/ProfileController')
const subjectsController = require('./controllers/SubjectsController')
const activitiesController = require('./controllers/ActivitiesController')
const routes = express.Router()

routes.get('/', loginController.tryToLogin)
routes.get('/profile', profileController.getStudentProfile) 
routes.get('/colleges', collegesController.getColleges) 
routes.get('/courses', coursesController.getCourses) 
routes.get('/subjects', subjectsController.getSubjects) 
routes.get('/activities', activitiesController.getActivities) 


module.exports = routes