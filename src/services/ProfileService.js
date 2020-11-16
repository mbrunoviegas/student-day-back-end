const api = require('../api')

const getStudentSubjects = async (student) => {
    const subjects = await api.subjects()
    return student.subjectsIds.map((subjectId) =>
        subjects.find(subject => subject.id === subjectId)
    )
}

const getCourseNameById = async (courseId) => {
    const courses = await api.courses()
    return courses.find(course => course.id === courseId).name
}

const getCollegeNameById = async (collegeId) => {
    const colleges = await api.colleges()
    return colleges.find(college => college.id === collegeId).name
}

const getFullProfile = async (student) => {
    console.log(student)
    const fullProfile = student
    fullProfile.collegeName = await getCollegeNameById(student.collegeId)
    console.log("Profile with College Name\n", fullProfile)
    fullProfile.courseName = await getCourseNameById(student.courseId)
    console.log("Profile with Course Name\n", fullProfile)
    fullProfile.studentSubjects = await getStudentSubjects(student)
    console.log("Profile with subjects\n", fullProfile)
    return fullProfile
}


module.exports = { getFullProfile }