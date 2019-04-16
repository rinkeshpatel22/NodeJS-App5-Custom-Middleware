let getEmployees = (req, res) => {
    // access the req which is modified from middleware 
    res.send(req.appLevelMessage + req.routeLevelMiddleware + ' This is employeeController');
}

// export controller
module.exports = {
    getEmployees: getEmployees
}