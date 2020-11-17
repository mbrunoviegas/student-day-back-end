const getStudentSubjects = (student, subjects) => {
    return student.subjectsIds.map((subjectId) =>
        subjects.find(subject => subject.id === subjectId)
    )
}

const getStudentCourse = (courseId, courses) => {
    return courses.find(course => course.id === courseId)
}

const getStudentCollege = (collegeId, colleges) => {
    return colleges.find(college => college.id === collegeId)
}


const buildFullProfile = (student, colleges, courses, subjects) => {
    const fullProfile =
    {
        "id": student.id,
        "name": student.name,
        "userId": student.userId,
        "college": getStudentCollege(student.collegeId, colleges),
        "course": getStudentCourse(student.courseId, courses),
        "subjects": getStudentSubjects(student, subjects)
    }
    return fullProfile
}

module.exports = { buildFullProfile }