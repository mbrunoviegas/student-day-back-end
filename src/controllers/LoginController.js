const loginMessageTest = async (request, response) => {
    const helloWorld = "Hello World in Node Js"
    return response.json(helloWorld)
}

module.exports = {
    loginMessageTest
}