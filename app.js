const express = require('express');
const app = express();
const appConfig = require('./config/appConfig');

// import application level middleware
const am = require('./app/middlewares/appMiddleWare');

// set application level middleware
app.use(am.appMiddleware);

//import routes
let route = require('./app/routes/app-routes');  
// set routes 
route.setRouter(app); 

app.listen(appConfig.port, () => { console.log('Server running at http://127.0.0.1:3000/') });