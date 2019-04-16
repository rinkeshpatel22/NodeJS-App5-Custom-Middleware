let userMiddleware = (req, res, next) => {
    req.routeLevelMiddleware = 'This is user route level middleware   >>>  ';

    // pass control to the next middleware/callback function
    next();
}

// export userMiddleware
module.exports = {
    userMiddleware : userMiddleware
}