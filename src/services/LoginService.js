const verifyUser = (query, students) => {
    const user = students.find(student => student.userId === query['userId'])
    if (user)
        return user.password == query['password'] ? user.userId : undefined
    else
        return undefined
}

module.exports = { verifyUser } 