const getCourseById = (courseId, courses) => {
    return courses.find(course => course.id === parseInt(courseId))
}

module.exports = { getCourseById } 