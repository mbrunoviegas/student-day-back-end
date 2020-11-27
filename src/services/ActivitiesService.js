const filterBySubjects = (activities, subjects) => {
    const filteredBySubjects = subjects.map((subject) => {
        const activityBySubject = activities.filter((activity) => activity.subject === subject.id)
        return { "subject": subject.name, "subjectId": subject.id, "activities": activityBySubject }
    })
    return filteredBySubjects
}

const filterActivities = (activities, userId, subjects) => {
    const userActivities = activities.filter((activity) => {
        return activity.userId === userId
    })

    if (userActivities)
        return filterBySubjects(userActivities, subjects)

}
module.exports = { filterActivities }