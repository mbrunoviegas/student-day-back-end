const activityObject = (activity, subjectName) => {
    return {
        description: activity.description,
        date: activity.date,
        subject: activity.subject,
        subjectName: subjectName,
        completed: activity.completed,
        userId: activity.userId
    }
}

module.exports = { activityObject }