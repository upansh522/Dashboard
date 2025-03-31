const  express = require('express');
const { getAdmins, getUserPerformance } = require('../controller/management');

const Router = express.Router();

Router.get('/admins', getAdmins);
Router.get('/performance/:id', getUserPerformance);

module.exports= Router
