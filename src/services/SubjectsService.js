const getSubjectById = (subjectId, subjects) => {
    return subjects.find(subject => subject.id === parseInt(subjectId))
}

module.exports = { getSubjectById }