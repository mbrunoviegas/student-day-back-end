const activityFactory = require('../factories/ActivityFactory')

const filterActivities = (activities, userId, subjects) => {
    const userActivities = activities.map((activity) => {
        if (activity.userId === userId)
            activity
    })

    console.log(userActivities)
    if (userActivities)
        return userActivities.map((activity) => {
            return activityFactory.activityObject(activity, subjects.find((subject) => subject.id === activity.subject).name)
        })
}

module.exports = { filterActivities }