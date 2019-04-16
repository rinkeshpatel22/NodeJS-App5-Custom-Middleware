let getUsers = (req, res) => {
    // access the req which is modified from middleware 
    res.send(req.appLevelMessage + req.routeLevelMiddleware + ' This is userController');
}

// export controller
module.exports = {
    getUsers: getUsers
}