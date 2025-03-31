const  express = require('express');
const {getUser, getDashboardStats}= require('../controller/general');

const Router = express.Router();

Router.get('/user/:id',getUser);
Router.get('/dashboard',getDashboardStats);

module.exports= Router
