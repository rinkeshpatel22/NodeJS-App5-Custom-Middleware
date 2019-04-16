let appMiddleware = (req, res, next) => {
    req.appLevelMessage = 'This is application level middleware  >>> ';

    // pass control to the next middleware/callback function
    next(); 
}

// export appMiddleware
module.exports = {
    appMiddleware : appMiddleware
}