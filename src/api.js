const fs = require('fs')
const path = require('path')

const USERS_PATH = path.join(__dirname, '../data/json_files', 'users.json')
const COLLEGES_PATH = path.join(__dirname, '../data/json_files', 'colleges.json')
const COURSES_PATH = path.join(__dirname, '../data/json_files', 'courses.json')
const SUBJECTS_PATH = path.join(__dirname, '../data/json_files', 'subjects.json')
const ACTIVITIES_PATH = path.join(__dirname, '../data/json_files', 'activities.json')
const GRADES_PATH = path.join(__dirname, '../data/json_files', 'grades.json')

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data) => JSON.parse(data))
  .then((data) => data)
const writeJsonFile = (data, path) => fs.writeFile(path, JSON.stringify(data), (err) =>{
    if(err)
      console.log(err)
})

exports.users = () => readJsonFile(USERS_PATH)
exports.colleges = () => readJsonFile(COLLEGES_PATH)
exports.courses = () => readJsonFile(COURSES_PATH)
exports.subjects = () => readJsonFile(SUBJECTS_PATH)
exports.activities = () => readJsonFile(ACTIVITIES_PATH)
exports.grades = () => readJsonFile(GRADES_PATH)

exports.saveActivities = (data) => writeJsonFile(data, ACTIVITIES_PATH)
exports.saveGrades = (data) => writeJsonFile(data, GRADES_PATH)


