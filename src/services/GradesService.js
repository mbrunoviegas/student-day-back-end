const filterGrades = (grades, userId) => {
    return grades.filter((grade) => {
        return grade.userId === userId
    })
}

module.exports = { filterGrades }