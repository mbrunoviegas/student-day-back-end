const api = require("../api")
const activitiesService = require("../services/ActivitiesService")

const getActivities = async (request, response) => {
    if (Object.keys(request.query).length > 0) {
        const activities = await api.activities()
        const subjects = await api.subjects()
        const filteredActivites = activitiesService.filterActivities(activities, request.query['userId'], subjects)

        if (filteredActivites) {
            response.status(200).json(filteredActivites)
        } else {
            response.status(404).json("Não existem atividades para você.")
        }
    } else {
        response.status(400).json("Ocorreu um problema. Atualize a página.")
    }
}

const insertActivity = async (request, response) => {
    const { activity } = request.body
    console.log(activity)
    if (activity) {
        const activities = await api.activities()
        activities.push(activity)
        api.saveActivities(activities)
        response.status(200).json("OK")
    } else
        response.status(400).json("Error ao inserir nova atividade")
}

module.exports = { getActivities, insertActivity }