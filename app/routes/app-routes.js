// import controllers
const employeeController = require('./../controllers/employeeController');
const userController = require('./../controllers/userController');
const sharedController = require('./../controllers/sharedController');

// import middlewares
const em = require('./../middlewares/employeeMiddleware'); 
const um = require('./../middlewares/userMiddleWare');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/employees', em.employeeMiddleware, employeeController.getEmployees);
    app.get('/users', um.userMiddleware, userController.getUsers);
    app.get('/', sharedController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}