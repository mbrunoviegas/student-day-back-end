const { subjects } = require("../api")

const filterBySubjects = (grades, subjects) => {
    const filteredBySubjects = subjects.map((subject) => {
        const gradesBySubject = grades.filter((grade) => grade.subject === subject.id)
        return { "subject": subject.name, "subjectId": subject.id, "grades": gradesBySubject }
    })
    return filteredBySubjects
}

const filterGrades = (grades, userId, subjects) => {
    const userGrades = grades.filter((grade) => {
        return grade.userId === userId
    })

    return filterBySubjects(userGrades, subjects)
}

module.exports = { filterGrades }