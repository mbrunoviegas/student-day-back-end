const filterActivities = (activities, userId, subjects) => {
    const userActivities = activities.filter((activity) => {
        return activity.userId === userId
    })

    if (userActivities)
        return userActivities.map((activity) => {
            activity.subjectName = subjects.find((subject) => subject.id === activity.subject).name
            return activity
        })
}

module.exports = { filterActivities }