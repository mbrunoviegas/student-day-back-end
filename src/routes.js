const express = require('express')
const loginController = require('./controllers/LoginController')
const collegesController = require('./controllers/CollegesController')
const profileController = require('./controllers/ProfileController')
const subjectsController = require('./controllers/SubjectsController')
const activitiesController = require('./controllers/ActivitiesController')
const gradesController = require('./controllers/GradesController')
const routes = express.Router()

routes.get('/', loginController.tryToLogin)
routes.get('/profile', profileController.getStudentProfile) 
routes.get('/colleges', collegesController.getColleges) 
routes.get('/subjects', subjectsController.getSubjects) 

routes.get('/activities', activitiesController.getActivities) 
routes.post('/activities', activitiesController.insertActivity) 

routes.get('/grades', gradesController.getGrades) 
routes.post('/grades', gradesController.insertGrade) 


module.exports = routes