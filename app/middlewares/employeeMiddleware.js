let employeeMiddleware = (req, res, next) => {
    req.routeLevelMiddleware = 'This is employee route level middleware  >>> ';

    // pass control to the next middleware/callback function
    next();
}

// export employeeMiddleware
module.exports = {
    employeeMiddleware : employeeMiddleware
}