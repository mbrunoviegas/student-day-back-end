const getCollegeById = (collegeId, colleges) => {
    return colleges.find(college => college.id === parseInt(collegeId))
}

module.exports = { getCollegeById }